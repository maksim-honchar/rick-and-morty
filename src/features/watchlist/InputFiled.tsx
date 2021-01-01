import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEpisode } from "../../app/watchlistSlice";
import { nanoid } from "@reduxjs/toolkit";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "250px",
    },
  })
);

export default function InputField() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [titleEpisode, setTitleEpisode] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setTitleEpisode(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleEpisode !== "") {
      const episode = {
        id: nanoid(),
        title: titleEpisode,
        checked: false,
      };
      dispatch(addEpisode(episode));
      setTitleEpisode("");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-episode name">watchlist</InputLabel>
        <OutlinedInput
          id="episode name"
          value={titleEpisode}
          onChange={handleChange}
          labelWidth={65}
        />
      </FormControl>
    </form>
  );
}

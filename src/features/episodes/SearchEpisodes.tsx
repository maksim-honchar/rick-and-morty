import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import Tooltip from "@material-ui/core/Tooltip";

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

interface ISearchEpisodes {
  setFilter: (request: string) => void;
}

export default function SearchEpisodes(props: ISearchEpisodes) {
  const classes = useStyles();
  const [request, setRequest] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setRequest(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.setFilter(request);
  };

  const handleClean = () => {
    props.setFilter("");
    setRequest("");
  };

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">
          find episode by name
        </InputLabel>
        <OutlinedInput
          id="find episode"
          value={request}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <Tooltip title="clear">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClean}
                  edge="end"
                >
                  <HighlightOffIcon />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          }
          labelWidth={155}
        />
      </FormControl>
    </form>
  );
}

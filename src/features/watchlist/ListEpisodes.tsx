import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  episodesSelect,
  toggleEpisode,
  deleteEpisode,
} from "../../app/watchlistSlice";
import { loadState } from "../../app/sessionStorage";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

interface IEpisode {
  id: string;
  title: string;
  checked: boolean;
}

export default function ListEpisodes() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const episodes = useSelector(episodesSelect);
  const persistedState = loadState();

  const handleToggle = (id: string) => {
    dispatch(toggleEpisode(id));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteEpisode(id));
  };

  const srcStore = persistedState
    ? persistedState.watchlist.episodes
    : episodes;

  return (
    <List className={classes.root}>
      {episodes.map((episode: IEpisode) => {
        return (
          <ListItem
            key={episode.id}
            role={undefined}
            dense
            button
            onClick={() => handleToggle(episode.id)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={episode.checked}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={episode.title} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(episode.id)}
              >
                <HighlightOffIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

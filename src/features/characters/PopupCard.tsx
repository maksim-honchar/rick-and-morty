import { useEffect, useState } from "react";
import { ICharacter } from "./Characters";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    minHeight: 600,
  },
  media: {
    maxWidth: 300,
    height: 300,
    margin: "auto",
    borderRadius: 3,
  },
});

interface IPopupCard extends ICharacter {
  handleClose: () => void;
}

interface Episode {
  id: number;
  name: string;
}

export default function PopupCard(props: IPopupCard) {
  const classes = useStyles();
  const [episodes, setEpisodes] = useState<Array<Episode>>([]);

  useEffect(() => {
    const requestsEpisodes = props.episode.map((url) => fetch(url));
    Promise.all(requestsEpisodes)
      .then((responses) => Promise.all(responses.map((resp) => resp.json())))
      .then((result) => setEpisodes(result));
  }, []);

  const listEpisodes = episodes.map((episode: Episode) => (
    <Typography key={episode.id}>{episode.name}</Typography>
  ));

  return (
    <Card className={classes.root}>
      <CardActions>
        <Grid container justify="flex-end">
          <Grid item>
            <IconButton onClick={props.handleClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            species: {props.species}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            status: {props.status}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            gender: {props.gender}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            origin: {props.origin.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            location: {props.location.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            episode: {listEpisodes}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

import { useEffect, useState } from "react";
import { ICharacter } from "./Characters";
import "./PopupCard.scss";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";

interface IPopupCard extends ICharacter {
  handleClose: () => void;
}

interface Episode {
  id: number;
  name: string;
}

export default function PopupCard(props: IPopupCard) {
  const [episodes, setEpisodes] = useState<Array<Episode>>([]);

  useEffect(() => {
    const requestsEpisodes = props.episode.map((url) => fetch(url));
    Promise.all(requestsEpisodes)
      .then((responses) => Promise.all(responses.map((resp) => resp.json())))
      .then((result) => setEpisodes(result));
  }, []);

  const listEpisodes = episodes.map((episode: Episode) => (
    <Typography
      key={episode.id}
      color="textSecondary"
      component="p"
      variant="body2"
    >
      <span className="episodes">{episode.name}</span>
    </Typography>
  ));

  return (
    <Card className="root" /*  className={classes.root} */>
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
        <CardMedia className="media" image={props.image} title={props.name} />
        <CardContent>
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography color="textSecondary" component="p">
              <span className="episodes">
                <strong>species:</strong> {props.species}
              </span>
            </Typography>
            <Typography color="textSecondary" component="p">
              <span className="episodes">
                <strong>status: </strong>
                {props.status}
              </span>
            </Typography>
            <Typography color="textSecondary" component="p">
              <span className="episodes">
                <strong>gender:</strong> {props.gender}
              </span>
            </Typography>
            <Typography color="textSecondary" component="p">
              <span className="episodes">
                <strong>origin:</strong> {props.origin.name}
              </span>
            </Typography>
            <Typography color="textSecondary" component="p">
              <span className="episodes">
                <strong>location:</strong> {props.location.name}
              </span>
            </Typography>
            <div className="episode-title">
              <Typography color="textSecondary" component="p">
                <strong>EPISODES:</strong>
              </Typography>
            </div>
            {listEpisodes}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

import { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { ICharacter } from "./Characters";
import PopupWindow from "./PopupWindow";

const useStyles = makeStyles({
  card: {
    height: 370,
  },
  media: {
    maxWidth: 200,
    height: 200,
    margin: "10px  auto 0 auto",
    borderRadius: 5,
  },
});

export default function CardCharacter(props: ICharacter) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "popover" : undefined;

  return (
    <Fragment>
      <Card className={classes.card} onClick={handleClick}>
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
          </CardContent>
        </CardActionArea>
      </Card>
      <PopupWindow
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        id={id}
        name={props.name}
        image={props.image}
        species={props.species}
        status={props.status}
        gender={props.gender}
        origin={props.origin}
        location={props.location}
        episode={props.episode}
      />
    </Fragment>
  );
}

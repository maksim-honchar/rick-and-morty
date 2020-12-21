import { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";

import { ICharacter } from "./Characters";

const useStyles = makeStyles({
  card: {
    height: 460,
  },
  media: {
    height: 300,
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
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div
          style={{
            minWidth: "600px",
            width: "100%",
            height: "600px",
            margin: "auto",
          }}
        >
          <button onClick={handleClose}>CLOSE</button>
          <p>origin: {props.origin.name}</p>
          <p>location: {props.location.name}</p>
          <p>{props.episode[0]}</p>
        </div>
      </Popover>
    </Fragment>
  );
}

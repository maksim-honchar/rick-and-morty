import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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

  return (
    <Card className={classes.card}>
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
  );
}

import Grid from "@material-ui/core/Grid";
import InputField from "./InputFiled";
import ListEpisodes from "./ListEpisodes";

export const Watchlist = () => {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <InputField />
      <ListEpisodes />
    </Grid>
  );
};

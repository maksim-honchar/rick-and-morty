import { Fragment, useEffect, useState } from "react";
import { charactersURL } from "../../app/utils";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PaginationPanel from "../../components/PaginationPanel";
import CardCharacter from "./CardCharacter";
import FilterCharacters from "./FilterCharacters";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card_character: {
      textAlign: "center",
    },
  })
);

export interface ICharacter {
  name: string;
  image: string;
  id: string;
  species: string;
  status: string;
  gender: string;
}

export const Characters = () => {
  const classes = useStyles();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  const outputCharaters = characters.map((character: ICharacter) => (
    <Grid
      className={classes.card_character}
      key={character.id}
      item
      lg={3}
      sm={6}
      md={4}
      xs={12}
    >
      <CardCharacter
        id={character.id}
        name={character.name}
        image={character.image}
        species={character.species}
        status={character.status}
        gender={character.gender}
      />
    </Grid>
  ));

  useEffect(() => {
    try {
      fetch(`${charactersURL}/?page=${currentPage}&`)
        .then((response) => response.json())
        .then((output) => {
          setCharacters(output.results);
          setTotalPages(output.info.pages);
        });
    } catch (error) {
      console.error(error);
    }
  }, [currentPage]);

  return (
    <Fragment>
      <FilterCharacters />
      <Grid container spacing={3} justify="center">
        {outputCharaters}
      </Grid>
      <PaginationPanel
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </Fragment>
  );
};

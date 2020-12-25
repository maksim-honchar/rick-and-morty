import { useEffect, useState } from "react";
import { charactersURL } from "../../app/utils";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import PaginationPanel from "../../components/PaginationPanel";
import CardCharacter from "./CardCharacter";
import FilterSpecies from "./FilterSpecies";
import FilterStatus from "./FilterStatus";
import FilterGender from "./FilterGender";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card_character: {
      textAlign: "center",
    },
    filter: {
      border: "1px solid white",
      height: "1px",
      marginBottom: "40px",
    },
    spiner: {
      marginTop: "20vh",
    },
  })
);

export interface ICharacter {
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  episode: string[];
}

export const Characters = () => {
  const classes = useStyles();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");

  const outputCharaters = characters.map((character: ICharacter, index) => (
    <Grid
      item
      className={classes.card_character}
      key={index}
      lg={3}
      sm={6}
      md={4}
      xs={12}
    >
      <CardCharacter
        name={character.name}
        image={character.image}
        species={character.species}
        status={character.status}
        gender={character.gender}
        origin={character.origin}
        location={character.location}
        episode={character.episode}
      />
    </Grid>
  ));

  useEffect(() => {
    try {
      fetch(`${charactersURL}/?page=${currentPage}&${filter}`)
        .then((response) => response.json())
        .then((output) => {
          setCharacters(output.results);
          setTotalPages(output.info.pages);
        });
    } catch (error) {
      console.error(error);
    }
  }, [currentPage, filter]);

  const viewFilter = (query: string) => {
    const regex = /=/;
    return `[ ${query.replace(regex, ": ")} ]`;
  };

  const viewBlock = (
    <>
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item>
          <FilterSpecies
            setFilter={setFilter}
            setCurrentPage={setCurrentPage}
          />
        </Grid>
        <Grid item>
          <FilterStatus setFilter={setFilter} setCurrentPage={setCurrentPage} />
        </Grid>
        <Grid item>
          <FilterGender setFilter={setFilter} setCurrentPage={setCurrentPage} />
        </Grid>
      </Grid>
      <Grid item className={classes.filter}>
        <Typography color="textSecondary">
          {filter === "" || typeof filter !== "string"
            ? "[ All ]"
            : viewFilter(filter)}
        </Typography>
      </Grid>
      <Grid container spacing={3} justify="center">
        {outputCharaters}
      </Grid>
      <PaginationPanel
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );

  const spiner = (
    <Grid item className={classes.spiner}>
      <CircularProgress />
    </Grid>
  );

  return (
    <Grid container alignItems="center" justify="center">
      {characters.length < 20 ? spiner : viewBlock}
    </Grid>
  );
};

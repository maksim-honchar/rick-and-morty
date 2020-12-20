import { useEffect, useState } from "react";
import { charactersURL } from "../../app/utils";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PaginationPanel from "../../components/PaginationPanel";
import CardCharacter from "./CardCharacter";

import FilterSpecies from "./FilterSpecies";
import FilterStatus from "./FilterStatus";
import FilterGender from "./FilterGender";
import { Typography } from "@material-ui/core";

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
  const [filter, setFilter] = useState("");
  const formatFilter = filter.toString();

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

  return (
    <Grid container alignItems="center" justify="center">
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
          {formatFilter === "" || formatFilter === "[object Object]"
            ? "[ All ]"
            : viewFilter(filter)}
        </Typography>
        {/*Если вызов фильтра не завершился выбором - приложение падает  */}
      </Grid>
      <Grid container spacing={3} justify="center">
        {outputCharaters}
      </Grid>
      <PaginationPanel
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </Grid>
  );
};

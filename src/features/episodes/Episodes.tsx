import { useEffect, useState } from "react";
import { episodesURL } from "../../app/utils";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import PaginationPanel from "../../components/PaginationPanel";
import TableEpisodes from "./TableEpisodes";

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

export const Episodes = () => {
  const classes = useStyles();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  const [filter, setFilter] = useState("");

  const outputEpisodes = null;

  useEffect(() => {
    try {
      fetch(`${episodesURL}/?page=${currentPage}&${filter}`)
        .then((response) => response.json())
        .then((output) => {
          setEpisodes(output.results);
          setTotalPages(output.info.pages);
        });
    } catch (error) {
      console.error(error);
    }
  }, [currentPage, filter]);

  //   const viewFilter = (query: string) => {
  //     const regex = /=/;
  //     return `[ ${query.replace(regex, ": ")} ]`;
  //   };

  const viewBlock = (
    <>
      <TableEpisodes episodes={episodes} />
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

  console.log(episodes);

  return (
    <Grid container alignItems="center" justify="center">
      {/* {episodes.length < 20 ? spiner : viewBlock} */}
      {viewBlock}
    </Grid>
  );
};

import { useEffect, useState } from "react";
import { locationsURL } from "../../app/utils";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import PaginationPanel from "../../components/PaginationPanel";
import TableLocations from "./TableCocations";
import SearchField from "../../components/SearchField";
import FilterType from "./FilterType";
import DimensionType from "./DimensionType";

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

export const Locations = () => {
  const classes = useStyles();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [locations, setLocations] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    try {
      fetch(`${locationsURL}/?page=${currentPage}&${filter}`)
        .then((response) => response.json())
        .then((output) => {
          if (output.results) {
            setLocations(output.results);
            setTotalPages(output.info.pages);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }, [currentPage, filter]);

  const viewBlock = (
    <>
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item>
          <SearchField setFilter={setFilter} />
        </Grid>
        <Grid item>
          <FilterType setFilter={setFilter} setCurrentPage={setCurrentPage} />
          <DimensionType
            setFilter={setFilter}
            setCurrentPage={setCurrentPage}
          />
        </Grid>
      </Grid>
      <TableLocations locations={locations} />
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
      {locations.length < 1 ? spiner : viewBlock}
    </Grid>
  );
};

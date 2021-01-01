import { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > * + *": {
        margin: theme.spacing(2),
      },
    },
    page: {
      margin: "30px auto",
    },
  })
);

interface IPaginationPanelProps {
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export default function PaginationPanel(props: IPaginationPanelProps) {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    props.setCurrentPage(page);
  }, [page]);

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item className={classes.page}>
        <Pagination
          count={props.totalPages}
          page={page}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
}

import { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > * + *": {
        margin: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    page: {
      marginTop: 30,
    },
  })
);

interface IPaginCharactersProps {
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export default function PaginationPanel(props: IPaginCharactersProps) {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    props.setCurrentPage(page);
  }, [page]);

  return (
    <div className={classes.root}>
      <div className={classes.page}>
        <Typography>Page: {page}</Typography>
      </div>
      <div>
        <Pagination
          count={props.totalPages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

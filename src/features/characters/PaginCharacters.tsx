import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { paginPage } from "./charactersSlice";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

interface IPaginCharactersProps {
  totalCharacters: number;
  computePagination: (paginNum: number) => void;
}

export default function PaginCharacters(props: IPaginCharactersProps) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(paginPage(Number(`${page}0`)));
    props.computePagination(Number(`${page}0`));
  }, [page]);

  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination
        count={props.totalCharacters}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
}

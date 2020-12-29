import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    // maxWidth: "50vw",
    // margin: "auto",
  },
});

interface ITableLocations {
  locations: Array<{
    name: string;
    dimension: string;
    type: string;
    id: number;
  }>;
}

export default function TableLocations(props: ITableLocations) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="episodes table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>type</TableCell>
            <TableCell>dimension</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.locations.map((location) => (
            <TableRow key={location.id}>
              <TableCell component="th" scope="row">
                {location.name}
              </TableCell>
              <TableCell>{location.type}</TableCell>
              <TableCell>{location.dimension}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

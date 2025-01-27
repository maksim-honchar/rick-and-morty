import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

interface ITableEpisodes {
  episodes: Array<{ name: string; air_date: string; id: number }>;
}

export default function TableEpisodes(props: ITableEpisodes) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="episodes table">
        <TableHead>
          <TableRow>
            <TableCell align="center">name</TableCell>
            <TableCell>air date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.episodes.map((episode) => (
            <TableRow key={episode.id}>
              <TableCell align="center" component="th" scope="row">
                {episode.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {episode.air_date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

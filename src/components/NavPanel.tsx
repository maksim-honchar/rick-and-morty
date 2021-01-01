import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setPage, pageSelect } from "../app/navSlice";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavPanel() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const page = useSelector(pageSelect);

  const handleChange = (event: React.ChangeEvent<{}>, newpage: number) => {
    dispatch(setPage(newpage));
  };

  useEffect(() => {
    if (page === 0) {
      history.push("/");
    } else if (page === 1) {
      history.push("/episodes");
    } else if (page === 2) {
      history.push("/locations");
    } else if (page === 3) {
      history.push("/watchlist");
    }
  }, [page]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={page}
          onChange={handleChange}
          aria-label="nav tabs"
        >
          <LinkTab label="Characters" />
          <LinkTab label="Episodes" />
          <LinkTab label="Locations" />
          <LinkTab label="My watch list" />
        </Tabs>
      </AppBar>
    </div>
  );
}

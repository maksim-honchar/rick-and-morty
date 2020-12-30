import { Fragment, useState } from "react";
import { IFilter } from "../../app/utils";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function FilterType(props: IFilter) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (filter: string) => {
    setAnchorEl(null);
    props.setCurrentPage(1);
    props.setFilter(filter);
  };

  return (
    <Fragment>
      <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
        type
      </Button>
      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose("")}>all types</MenuItem>
        <MenuItem onClick={() => handleClose("type=planet")}>planet</MenuItem>
        <MenuItem onClick={() => handleClose("type=cluster")}>cluster</MenuItem>
        <MenuItem onClick={() => handleClose("type=space%20station")}>
          space station
        </MenuItem>
        <MenuItem onClick={() => handleClose("type=microverse")}>
          microverse
        </MenuItem>
        <MenuItem onClick={() => handleClose("type=resort")}>resort</MenuItem>
        <MenuItem onClick={() => handleClose("type=tv")}>tv</MenuItem>
        <MenuItem onClick={() => handleClose("type=fantasy%20town")}>
          fantasy town
        </MenuItem>
        <MenuItem onClick={() => handleClose("type=dream")}>dream</MenuItem>
        <MenuItem onClick={() => handleClose("type=unknown")}>unknown</MenuItem>
        <MenuItem onClick={() => handleClose("type=game")}>game</MenuItem>
        <MenuItem onClick={() => handleClose("type=customs")}>customs</MenuItem>
        <MenuItem onClick={() => handleClose("type=spacecraft")}>
          spacecraft
        </MenuItem>
        <MenuItem onClick={() => handleClose("type=box")}>box</MenuItem>
        <MenuItem onClick={() => handleClose("type=teenyverse")}>
          teenyverse
        </MenuItem>
        <MenuItem onClick={() => handleClose("type=miniverse")}>
          miniverse
        </MenuItem>
        <MenuItem onClick={() => handleClose("type=dwarf%20planet")}>
          dwarf planet
        </MenuItem>
        <MenuItem onClick={() => handleClose("type=daycare")}>daycare</MenuItem>
      </Menu>
    </Fragment>
  );
}

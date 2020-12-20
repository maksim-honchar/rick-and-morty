import { Fragment, useState } from "react";
import { IFilter } from "./FilterSpecies";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function FilterGender(props: IFilter) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (filter: string) => {
    setAnchorEl(null);
    props.setFilter(filter);
  };

  return (
    <Fragment>
      <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
        gender
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose("")}>all genders</MenuItem>
        <MenuItem onClick={() => handleClose("gender=male")}>male</MenuItem>
        <MenuItem onClick={() => handleClose("gender=female")}>female</MenuItem>
        <MenuItem onClick={() => handleClose("gender=unknown")}>
          unknown
        </MenuItem>
        <MenuItem onClick={() => handleClose("gender=genderless")}>
          genderless
        </MenuItem>
      </Menu>
    </Fragment>
  );
}

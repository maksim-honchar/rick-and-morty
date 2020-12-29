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

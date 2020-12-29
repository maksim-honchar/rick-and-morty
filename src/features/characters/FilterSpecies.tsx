import { Fragment, useState } from "react";
import { IFilter } from "../../app/utils";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// export interface IFilter {
//   setFilter: (filter: string) => void;
//   setCurrentPage: (page: number) => void;
// }

export default function FilterSpecies(props: IFilter) {
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
        species
      </Button>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose("")}>all species</MenuItem>

        <MenuItem onClick={() => handleClose("species=human")}>human</MenuItem>
        <MenuItem onClick={() => handleClose("species=alien")}>alien</MenuItem>
        <MenuItem onClick={() => handleClose("species=robot")}>robot</MenuItem>
        <MenuItem onClick={() => handleClose("species=creature")}>
          mythological creature
        </MenuItem>
        <MenuItem onClick={() => handleClose("species=cronenberg")}>
          cronenberg
        </MenuItem>
        <MenuItem onClick={() => handleClose("species=disease")}>
          disease
        </MenuItem>
        <MenuItem onClick={() => handleClose("species=animal")}>
          animal
        </MenuItem>
        <MenuItem onClick={() => handleClose("species=unknown")}>
          unknown
        </MenuItem>
        <MenuItem onClick={() => handleClose("species=butthole")}>
          poopybutthole
        </MenuItem>
      </Menu>
    </Fragment>
  );
}

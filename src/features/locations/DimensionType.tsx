import { Fragment, useState } from "react";
import { IFilter } from "../../app/utils";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function DimensionType(props: IFilter) {
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
        dimension
      </Button>
      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose("")}>all</MenuItem>
        <MenuItem onClick={() => handleClose("dimension=dimension%20C-137")}>
          dimension c-137
        </MenuItem>
        <MenuItem onClick={() => handleClose("dimension=unknown")}>
          unknown
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("dimension=post-apocalyptic%20dimension")}
        >
          post-apocalyptic dimension
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("dimension=Replacement%20Dimension")}
        >
          replacement dimension
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("dimension=Cronenberg%20Dimension")}
        >
          cronenberg dimension
        </MenuItem>
        <MenuItem onClick={() => handleClose("dimension=Fantasy%20Dimension")}>
          fantasy dimension
        </MenuItem>
        <MenuItem onClick={() => handleClose("dimension=Dimension%205-126")}>
          dimension 5-126
        </MenuItem>
        <MenuItem
          onClick={() =>
            handleClose("dimension=Testicle%20Monster%20Dimension")
          }
        >
          testicle monster dimension
        </MenuItem>
        <MenuItem onClick={() => handleClose("dimension=Cromulon%20Dimension")}>
          cromulon dimension
        </MenuItem>
        <MenuItem onClick={() => handleClose("dimension=Dimension%20C-500A")}>
          dimension c-500A
        </MenuItem>
        <MenuItem onClick={() => handleClose("dimension=Dimension%20K-83")}>
          dimension k-83
        </MenuItem>
        <MenuItem onClick={() => handleClose("dimension=Dimension%20J19ζ7")}>
          dimension j19ζ7
        </MenuItem>
        <MenuItem
          onClick={() =>
            handleClose("dimension=Eric%20Stoltz%20Mask%20Dimension")
          }
        >
          eric stoltz mask dimension
        </MenuItem>
        <MenuItem
          onClick={() =>
            handleClose("dimension=Evil%20Rick's%20Target%20Dimension")
          }
        >
          evil rick's target dimension
        </MenuItem>
        <MenuItem
          onClick={() =>
            handleClose("dimension=Giant%20Telepathic%20Spiders%20Dimension")
          }
        >
          giant telepathic spiders dimension
        </MenuItem>
        <MenuItem onClick={() => handleClose("dimension=Unknown%20dimension")}>
          unknown dimension
        </MenuItem>
        <MenuItem onClick={() => handleClose("dimension=Dimension%20K-22")}>
          dimension k-22
        </MenuItem>
        <MenuItem onClick={() => handleClose("dimension=Dimension%20D-99")}>
          dimension d-99
        </MenuItem>
        <MenuItem onClick={() => handleClose("dimension=Dimension%20D716")}>
          dimension d716
        </MenuItem>
        <MenuItem onClick={() => handleClose("dimension=dimension%20d716-b")}>
          dimension d716-b
        </MenuItem>
      </Menu>
    </Fragment>
  );
}

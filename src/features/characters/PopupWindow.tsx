import PopupCard from "./PopupCard";
import { ICharacter } from "./Characters";
import Popover from "@material-ui/core/Popover";

export interface IPopupWindow extends ICharacter {
  id: "popover" | undefined;
  open: boolean;
  anchorEl: HTMLDivElement | null;
  handleClose: () => void;
}

export default function PopupWindow(props: IPopupWindow) {
  return (
    <Popover
      id={props.id}
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <PopupCard
        name={props.name}
        image={props.image}
        species={props.species}
        status={props.status}
        gender={props.gender}
        origin={props.origin}
        location={props.location}
        episode={props.episode}
        handleClose={props.handleClose}
      />
    </Popover>
  );
}

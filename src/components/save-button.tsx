import { Fab, SvgIcon } from "@mui/material";

const SaveIcon = (
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
    <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"></path>
  </svg>
);

type Props = {
  onClick: () => void;
};

export default ({ onClick }: Props) => (
  <Fab
    color="primary"
    style={{ zIndex: 999, position: "fixed", bottom: "20px", right: "20px" }}
    onClick={onClick}
  >
    <SvgIcon>{SaveIcon}</SvgIcon>
  </Fab>
);

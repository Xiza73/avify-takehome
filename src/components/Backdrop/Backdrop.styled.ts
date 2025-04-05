import { styled } from "@mui/material";

const BackdropWrapper = styled("div", {
  name: "BackdropWrapper",
})(({ theme }) => ({
  position: "fixed",
  zIndex: 999,
  inset: 0,
  color: theme.palette.common.black,
  width: "100%",
  height: "100vh",
}));

const BackdropContent = styled("div", {
  name: "BackdropContent",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  inset: 0,
  backgroundColor: theme.palette.grey[900],
  opacity: 0.8,
  width: "100%",
  height: "100vh",
}));

export const BackdropStyled = {
  BackdropWrapper,
  BackdropContent,
};

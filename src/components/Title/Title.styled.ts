import { styled } from "@mui/material";

const TitleWrapper = styled("h1", {
  name: "TitleWrapper",
})(({ theme }) => ({
  fontSize: theme.typography.h1.fontSize,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));

export const TitleStyled = {
  TitleWrapper,
};

import { keyframes, styled } from "@mui/material";

const rotation = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const LoaderWrapper = styled("span", {
  name: "LoaderWrapper",
})(({}) => ({
  width: "48px",
  height: "48px",
  border: "5px solid #fff",
  borderBottomColor: "transparent",
  borderRadius: "50%",
  display: "inline-block",
  boxSizing: "border-box",
  animation: `${rotation} 1s linear infinite`,
}));

export const LoaderStyled = {
  LoaderWrapper,
};

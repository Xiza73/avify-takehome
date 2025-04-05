import React from "react";

import { Box, Typography } from "@mui/material";
import Title from "../../../../components/Title";

export const LoadingData: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Title>Loading...</Title>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Loading data...
      </Typography>
    </Box>
  );
};

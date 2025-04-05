import React from "react";

import { Box, Typography } from "@mui/material";
import Title from "../../../../components/Title";

export interface ErrorDataProps {
  error: Error | null;
}

export const ErrorData: React.FC<ErrorDataProps> = ({ error }) => {
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
      <Title>Error</Title>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        {error?.message || "Error loading data"}
      </Typography>
    </Box>
  );
};

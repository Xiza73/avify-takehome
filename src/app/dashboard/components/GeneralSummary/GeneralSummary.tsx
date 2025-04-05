import React from "react";
import Doughnut from "../../../../components/Charts/Doughnut";
import { GenerationMix } from "../../domain/get-generation-data.domain";
import { Box, Typography } from "@mui/material";
import { Palette } from "../../../../domain/palette.enum";
import { getFuelColor } from "../../utils/fuel-color";
import { capitalizeFirstLetter } from "../../../../utils/text.util";

export interface GeneralSummaryProps {
  data: GenerationMix[];
}

export const GeneralSummary: React.FC<GeneralSummaryProps> = ({ data }) => {
  const series = data.map((item) => item.percentage);
  const labels = data.map((item) => capitalizeFirstLetter(item.fuel));
  const colors = data.map((item) => getFuelColor(item.fuel));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        pt: 1.5,
        pb: 2,
        gap: 2,
        borderRadius: 2,
        boxShadow: 1,
        backgroundColor: Palette.WHITE_LIGHT,
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        General Summary
      </Typography>
      <Doughnut colors={colors} labels={labels} series={series} percentage />
    </Box>
  );
};

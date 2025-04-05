import React from "react";

import { GenerationMix } from "../../domain/get-generation-data.domain";
import HorizontalBars from "../../../../components/Charts/HorizontalBars";
import { Box, Typography } from "@mui/material";
import { Palette } from "../../../../domain/palette.enum";
import { capitalizeFirstLetter } from "../../../../utils/text.util";

export interface TopEnergySourcesProps {
  data: GenerationMix[];
}

export const TopEnergySources: React.FC<TopEnergySourcesProps> = ({ data }) => {
  const series = data
    .map((item) => ({
      name: capitalizeFirstLetter(item.fuel),
      value: item.percentage,
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

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
        Top Energy Sources
      </Typography>
      <HorizontalBars series={series} width={500} height={200} />
    </Box>
  );
};

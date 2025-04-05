import React from "react";
import { GenerationMix } from "../../domain/get-generation-data.domain";
import Bars from "../../../../components/Charts/Bars";
import { Box, Typography } from "@mui/material";
import { Palette } from "../../../../domain/palette.enum";
import { renewableFuels } from "../../domain/renewable.map";
import { Fuel } from "../../domain/fuel.enum";

export interface RenewableVsNonRenewableProps {
  data: GenerationMix[];
}

export const RenewableVsNonRenewable: React.FC<
  RenewableVsNonRenewableProps
> = ({ data }) => {
  const renewables = data.filter((item) => renewableFuels.includes(item.fuel));
  const nonRenewables = data.filter(
    (item) => !renewableFuels.includes(item.fuel)
  );

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
        Renewable vs. Non-Renewable Energy
      </Typography>
      <Bars
        categories={["Energy"]}
        series={[
          {
            name: "Renewable",
            data: [renewables.reduce((acc, item) => acc + item.percentage, 0)],
            color: Palette.INFO,
          },
          {
            name: "Non-Renewable",
            data: [
              nonRenewables.reduce((acc, item) => acc + item.percentage, 0),
            ],
            color: Palette.AQUA,
          },
        ]}
        width={700}
        height={200}
        percentage={true}
      />
    </Box>
  );
};

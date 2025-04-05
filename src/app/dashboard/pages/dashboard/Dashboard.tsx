import React from "react";
import { useGenerationDataQuery } from "../../queries/generation.query";
import { Box, Typography } from "@mui/material";
import Title from "../../../../components/Title";
import { formatDate, formatTime } from "../../../../utils/date.util";
import { LoadingData } from "../../components/LoadingData/LoadingData";
import { ErrorData } from "../../components/ErrorData/ErrorData";
import GeneralSummary from "../../components/GeneralSummary";
import { RenewableVsNonRenewable } from "../../components/RenewableVsNonRenewable/RenewableVsNonRenewable";
import { TopEnergySources } from "../../components/TopEnergySources/TopEnergySources";

export const Dashboard: React.FC = () => {
  const { data, error, isLoading } = useGenerationDataQuery();

  if (isLoading) {
    return <LoadingData />;
  }

  if (!data || error) {
    return <ErrorData error={error} />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        padding: 2,
      }}
    >
      <Title>Generation Mix</Title>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Data loaded from {formatDate(data.from)} {formatTime(data.from)} at{" "}
        {formatDate(data.to)} {formatTime(data.to)}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          flexWrap: "wrap",
          gap: 4,
          width: "100%",
        }}
      >
        <GeneralSummary data={data.generationMix} />
        <RenewableVsNonRenewable data={data.generationMix} />
        <TopEnergySources data={data.generationMix} />
      </Box>
    </Box>
  );
};

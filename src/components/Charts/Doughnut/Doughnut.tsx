import React from "react";

import Chart from "react-apexcharts";
import { Palette } from "../../../domain/palette.enum";

export interface DoughnutProps {
  colors: Palette[];
  labels: string[];
  series: number[];
  width?: number;
  percentage?: boolean;
}

export const Doughnut: React.FC<DoughnutProps> = ({
  colors,
  labels,
  series,
  width = 220,
  percentage = false,
}) => {
  return (
    <Chart
      type="donut"
      series={series}
      width={width}
      options={{
        chart: {
          type: "donut",
          background: "none",
        },
        dataLabels: {
          enabled: true,
          dropShadow: {
            enabled: false,
          },
          textAnchor: "end",
          formatter(_, opts) {
            return `${opts.w.globals.series[opts.seriesIndex]}${
              percentage ? "%" : ""
            }`;
          },
          style: {
            fontSize: "0.9rem",
            fontFamily: "Roboto",
            fontWeight: "normal",
            colors: ["black"],
          },
        },
        legend: {
          show: false,
        },
        stroke: {
          width: 0,
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            startAngle: -90,
            endAngle: 270,
            donut: {
              size: "70%",
            },
            dataLabels: {
              offset: 27,
              minAngleToShowLabel: -5,
            },
          },
        },
        labels,
        colors,
        grid: {
          padding: {
            top: 5,
            bottom: 10,
            right: -10,
            left: -10,
          },
        },
      }}
    />
  );
};

import React from "react";

import { useMemo } from "react";
import Chart from "react-apexcharts";
import { Palette } from "../../../domain/palette.enum";

interface Serie {
  name: string;
  value: number;
}

export interface HorizontalBarsProps {
  series: Serie[];
  width: number;
  height: number;
  left?: boolean;
}

export const HorizontalBars: React.FC<HorizontalBarsProps> = ({
  series,
  width,
  height,
  left = false,
}) => {
  const { categories, values, maxValue } = useMemo(() => {
    const categories: string[] = [];
    const values: number[] = [];

    series
      .sort((a, b) => b.value - a.value)
      .forEach((serie) => {
        categories.push(serie.name);
        values.push(serie.value);
      });

    return {
      categories,
      values,
      maxValue: Math.max(...values),
    };
  }, [series]);

  return (
    <Chart
      type="bar"
      series={[
        {
          name: "Handled",
          data: values,
        },
      ]}
      width={width}
      height={height}
      options={{
        chart: {
          fontFamily: "inherit",
          toolbar: {
            show: false,
          },
          stacked: true,
        },
        dataLabels: {
          enabled: false,
          offsetY: 9,
          style: {
            colors: [Palette.WHITE_LIGHT],
            fontSize: "1.2rem",
          },
        },
        grid: {
          show: false,
          xaxis: {
            lines: {
              show: true,
            },
          },
          padding: {
            top: -35,
            bottom: -20,
            right: 0,
            left: 0,
          },
        },
        legend: {
          show: false,
        },
        noData: {
          text: "No data available",
          align: "center",
        },
        plotOptions: {
          bar: {
            barHeight: "13px",
            borderRadius: 0,
            horizontal: true,
            colors: {
              ranges: [
                {
                  from: 0,
                  to: maxValue,
                  color: Palette.INFO,
                },
              ],
            },
            dataLabels: {
              total: {
                enabled: true,
                offsetX: 5,
                offsetY: -8,
                style: {
                  fontSize: "0.9rem",
                  fontWeight: 900,
                },
              },
            },
          },
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
          max: maxValue + maxValue * (0.3 - width / 4000),
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          categories: categories,
        },
        yaxis: {
          reversed: false,
          opposite: false,
          labels: {
            ...(left && {
              align: "left",
              offsetX: -12,
            }),
            offsetY: 2,
            style: {
              fontSize: "0.9rem",
            },
          },
        },
      }}
    />
  );
};

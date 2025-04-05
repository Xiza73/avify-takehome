import React from "react";

import Chart from "react-apexcharts";

interface Serie {
  name: string;
  data: number[];
  color: string;
}

export interface BarsProps {
  categories: string[];
  series: Serie[];
  width?: number;
  height?: number;
  percentage?: boolean;
}

export const Bars: React.FC<BarsProps> = ({
  categories,
  series,
  width,
  height,
  percentage = false,
}) => {
  return (
    <Chart
      options={{
        chart: {
          background: "white",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top",
            },
          },
        },
        dataLabels: {
          enabled: percentage,
          ...(percentage && {
            formatter: (val, _) => {
              return val + "%";
            },
          }),
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"],
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        noData: {
          text: "No data available",
          align: "center",
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories,
          labels: {
            show: true,
            rotate: 0,
            hideOverlappingLabels: false,
            trim: true,
          },
        },
        yaxis: {
          labels: {
            formatter(val, _) {
              return percentage ? val + "%" : val.toString();
            },
          },
        },
      }}
      series={series}
      type="bar"
      width={width}
      height={height}
    />
  );
};

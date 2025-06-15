"use client";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

// Generate 30 dates for June 2025
const generateJuneDates = () => {
  const year = 2025;
  const month = 6;
  const dates = [];
  for (let day = 1; day <= 30; day++) {
    dates.push(
      `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`
    );
  }
  return dates;
};

const ApexChart = () => {
  type ApexSeries = {
  name: string;
  type: "line" | "column";
  data: number[];
}[];
  const categories = generateJuneDates();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useState<{
    series: ApexSeries;
    options: ApexOptions;
  }>({
    series: [
      {
        name: "Income",
        type: "column",
        data: Array.from({ length: 30 }, () =>
          +(Math.random() * 5).toFixed(1)
        ),
      },
      {
        name: "Cashflow",
        type: "column",
        data: Array.from({ length: 30 }, () =>
          +(Math.random() * 10).toFixed(1)
        ),
      },
      {
        name: "Revenue",
        type: "line",
        data: Array.from({ length: 30 }, () =>
          +(Math.random() * 100).toFixed(0)
        ),
      },
    ],
    options: {
      chart: {
        height: 350,
        stacked: false,
        // No `type` here to support mixed chart types
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [1, 1, 4],
      },
      title: {
        text: "Financial Metrics - Jun 2025",
        align: "left",
        offsetX: 20,
      },
      xaxis: {
        categories,
        labels: {
          rotate: -45,
          style: {
            fontSize: "10px",
          },
        },
      },
      yaxis: [
        {
          seriesName: "Income",
          axisTicks: { show: true },
          axisBorder: { show: true, color: "#008FFB" },
          labels: { style: { colors: "#008FFB" } },
          title: { text: "Income (k crores)", style: { color: "#008FFB" } },
        },
        {
          seriesName: "Cashflow",
          opposite: true,
          axisTicks: { show: true },
          axisBorder: { show: true, color: "#00E396" },
          labels: { style: { colors: "#00E396" } },
          title: { text: "Cashflow (k crores)", style: { color: "#00E396" } },
        },
        {
          seriesName: "Revenue",
          opposite: true,
          axisTicks: { show: true },
          axisBorder: { show: true, color: "#FEB019" },
          labels: { style: { colors: "#FEB019" } },
          title: { text: "Revenue (k crores)", style: { color: "#FEB019" } },
        },
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: "topLeft",
          offsetY: 30,
          offsetX: 60,
        },
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line" // Can be "line", "bar" etc., for mixed charts it's OK
          height={350}
        />
      </div>
    </div>
  );
};

export default ApexChart;

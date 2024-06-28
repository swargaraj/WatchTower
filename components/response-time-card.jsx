"use client";

import { AreaChart } from "@tremor/react";

// Dummy Data
const data = [
  ...Array.from({ length: 60 }, (_, i) => ({
    date: `Jan ${String(i + 23).padStart(2, "0")}`,
    ResponseTime: Math.floor(Math.random() * 30) + 20,
  })),
];

const valueFormatter = function (number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

import "./status-dot.css";

const ResponseTimeCard = ({ title, status, latency, details }) => {
  return (
    <div className="border rounded-lg p-4 bg-[#FFFFFF] w-full sm:w-full lg:mb-0 mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <span className="px-3 py-1 border rounded-full text-xs flex items-center">
          <span
            className={`status-dot ${
              status === "Operational"
                ? "status-up"
                : status === "Dead"
                ? "status-dead"
                : "status-down"
            } mr-2`}
          ></span>{" "}
          {status}
        </span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm font-medium">Response Time</p>
        <p className="text-gray-500 text-sm">{details}</p>
      </div>
      <div>
        <AreaChart
          className="mt-4 h-72"
          data={data}
          index="date"
          categories={["ResponseTime"]}
          colors={["indigo"]}
          showXAxis={false}
          showLegend={false}
          showYAxis={false}
          showGridLines={false}
          showAnimation={false}
          valueFormatter={valueFormatter}
        />
      </div>
      <div classNames="container mt-2">
        <div className="flex items-center">
          <span className={`pr-2 flex-shrink-0 text-indigo-400 text-xs`}>
            May
          </span>
          <div className={`h-px bg-indigo-400  w-full`}></div>
          <span className={`px-2 flex-shrink-0 text-indigo-400 text-xs`}>
            Avg. {latency}
          </span>
          <div className={`h-px bg-indigo-400  w-full`}></div>
          <span className={`pl-2 flex-shrink-0 text-indigo-400  text-xs`}>
            July
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResponseTimeCard;

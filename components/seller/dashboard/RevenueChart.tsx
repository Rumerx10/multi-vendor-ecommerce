"use client"
import React from "react";
import dynamic from "next/dynamic";


const ApexChart = dynamic(()=>import("./ApexChart"),{ssr:false})
const RevenueChart = () => {
  return (
    <div className="w-full px-3 py-5 border border-[#264D82] rounded-lg mt-5">
      <h3 className="font-semibold text-xl mb-4">Revenue Trend (30 days)</h3>
      <div className="h-auto w-full rounded-lg">
        <ApexChart />
      </div>
    </div>
  );
};

export default RevenueChart;

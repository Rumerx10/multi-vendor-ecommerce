import React from "react";

const OrdersStatus = () => {
  return (
    <div className="w-full px-3 py-5 border border-borderGray rounded-lg mt-5">
      <h3 className="font-semibold text-xl mb-4">Orders Status</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 min-h-32 flex flex-col gap-2 border border-borderGray">
          <div className="flex gap-2.5 items-center text-textGray text-sm font-medium">
            <div className="h-3 w-3 rounded-full bg-yellow"/>
            <p>Pending</p>
          </div>
          <p className="pl-[22px] text-2xl font-bold">12</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 min-h-32 flex flex-col gap-2 border border-borderGray">
          <div className="flex gap-2.5 items-center text-textGray text-sm font-medium">
            <div className="h-3 w-3 rounded-full bg-blue"/>
            <p>Shipped</p>
          </div>
          <p className="pl-[22px] text-2xl font-bold">24</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 min-h-32 flex flex-col gap-2 border border-borderGray">
          <div className="flex gap-2.5 items-center text-textGray text-sm font-medium">
            <div className="h-3 w-3 rounded-full bg-green"/>
            <p>Delivered</p>
          </div>
          <p className="pl-[22px] text-2xl font-bold">156</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 min-h-32 flex flex-col gap-2 border border-borderGray">
          <div className="flex gap-2.5 items-center text-textGray text-sm font-medium">
            <div className="h-3 w-3 rounded-full bg-primary"/>
            <p>Canceled</p>
          </div>
          <p className="pl-[22px] text-2xl font-bold">3</p>
        </div>
      </div>
    </div>
  );
};

export default OrdersStatus;

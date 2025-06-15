import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const StockWarning = () => {
  return (
    <div className="flex items-center justify-between w-full p-6 pl-11 border border-borderGray rounded-lg mt-5 bg-liteYellow">
        <div className="flex gap-2.5 items-center">
            <AiOutlineExclamationCircle size={24} color="#C77414" />
            <p className="text-yellow">You have 2 products running low. Restock now.</p>
        </div>
        <div className="bg-white rounded-lg text-yellow px-4 py-2.5 cursor-pointer">View Porducts</div>
    </div>
  );
};

export default StockWarning;

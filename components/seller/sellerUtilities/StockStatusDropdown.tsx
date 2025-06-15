"use client"

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { stockStatusOptions } from "@/docs/data";
import { FaCheck } from "react-icons/fa6";
const StockStatusDropdown = () => {
  const [selectedStockStatus, setSelectedStockStatus] = useState("All");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" className="w-full">
          <div className="h-14 flex items-center justify-between px-8 py-4 border border-borderGray rounded-sm w-full">
            <p>{selectedStockStatus}</p>
            <ChevronDown className="h-6 w-6" />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {stockStatusOptions.map((option) => (
          <DropdownMenuItem
            key={option}
            onClick={() => setSelectedStockStatus(option)}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-2 w-full">
                <div className={`${selectedStockStatus===option?'visible':'invisible'}`} >
                    <FaCheck className="text-black" />
                </div>
              <p className="font-medium text-sm">{option}</p>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StockStatusDropdown;

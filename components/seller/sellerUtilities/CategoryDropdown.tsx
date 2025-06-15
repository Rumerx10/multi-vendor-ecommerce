"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Categories } from "@/docs/data";
import { FaCheck } from "react-icons/fa6";

interface CategoryDropdownProps {
  value?: string;
  onChange?: (value: string) => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  value,
  onChange,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" className="w-full">
          <div className="h-[52px] flex items-center justify-between px-5 py-4 border border-borderGray rounded-sm w-full">
            <p>{value ? value : "All Categories"}</p>
            <ChevronDown className="h-6 w-6" />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Categories.map((option) => (
          <DropdownMenuItem
            key={option}
            onClick={() => onChange && onChange(option)}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-2 w-full">
              <div className={value === option ? "visible" : "invisible"}>
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

export default CategoryDropdown;

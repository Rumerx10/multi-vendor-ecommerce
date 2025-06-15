"use client";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { FaCheck } from "react-icons/fa6";
import { CategoryBrandMap } from "@/docs/data";

interface BrandDropdownProps {
  category: string;
  value?: string;
  onChange?: (value: string) => void;
}

const BrandDropdown: React.FC<BrandDropdownProps> = ({
  category,
  value,
  onChange,
}) => {
  const [selectedBrand, setSelectedBrand] = useState("Select Brand");
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    const newBrands = CategoryBrandMap[category] || [];
    setBrands(newBrands);
    setSelectedBrand("Select Brand");
  }, [category]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" className="w-full">
          <div className="h-[52px] flex items-center justify-between px-5 py-4 border border-borderGray rounded-sm w-full">
            <p>{value?value:'Select Brand'}</p>
            <ChevronDown className="h-6 w-6" />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {brands.map((brand) => (
          <DropdownMenuItem
            key={brand}
            onClick={() => onChange && onChange(brand)}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-2 w-full">
              <div
                className={`${
                  selectedBrand === brand ? "visible" : "invisible"
                }`}
              >
                <FaCheck className="text-black" />
              </div>
              <p className="font-medium text-sm">{brand}</p>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BrandDropdown;

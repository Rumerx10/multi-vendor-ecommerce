"use client";
import { useFormContext, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Input from "@/components/shared/Input";
import BrandDropdown from "@/components/seller/sellerUtilities/BrandDropdown";

const CONDITIONS = [
  "New",
  "Open Box",
  "Refurbished",
  "Very Good",
  "Good",
  "Used",
  "Defective",
];

const FEATURES = [
  "5G",
  "Wireless Charging",
  "Face ID",
  "Fingerprint",
  "Water Resistant",
];

export default function SpecificationsSection({
  category,
}: {
  category: string;
}) {
  const { control } = useFormContext();

  const [specCount, setSpecCount] = useState(1);
  const addSpec = () => setSpecCount((prev) => prev + 1);

  return (
    <section className="border border-borderGray rounded-lg p-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-2xl font-medium">Specifications</h4>
        <button
          type="button"
          onClick={addSpec}
          className="text-blue-600 text-sm font-medium"
        >
          + Add another specification
        </button>
      </div>

      {/* Brand Dropdown */}
      <div className="flex flex-col w-full gap-2 mb-6">
        <label className="font-medium text-lg">
          Brand <span className="text-tomato">*</span>
        </label>
        <Controller
          name="brand"
          control={control}
          render={({ field }) => (
            <BrandDropdown
              category={category}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      {/* Specifications Fields */}
      {[...Array(specCount)].map((_, index) => (
        <div key={index} className="grid md:grid-cols-2 gap-5 mb-6">
          <Input
            label="Model"
            name={`specifications.${index}.model`}
            placeholder="Select Model"
            required
          />
          <Input
            label="Storage"
            name={`specifications.${index}.storage`}
            placeholder="Select Storage"
            required
          />
          <Input
            label="RAM"
            name={`specifications.${index}.ram`}
            placeholder="Select RAM"
            required
          />
          <Input
            label="Colour"
            name={`specifications.${index}.colour`}
            placeholder="Select Colour"
            required
          />
        </div>
      ))}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Condition (Radio-style with single select) */}
        <div>
          <Label className="block text-base font-medium mb-2">
            Condition <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="condition"
            control={control}
            defaultValue="New"
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                {CONDITIONS.map((condition) => (
                  <div key={condition} className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => field.onChange(condition)}
                      className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all
                        ${
                          field.value === condition
                            ? "border-blue bg-white"
                            : "border-borderGray"
                        }`}
                    >
                      {field.value === condition && (
                        <svg
                          className="h-3.5 w-3.5 text-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>
                    <Label className="text-sm cursor-pointer">
                      {condition}
                    </Label>
                  </div>
                ))}
              </div>
            )}
          />
        </div>

        {/* Features (Checkbox) */}
        <div>
          <Label className="block text-base font-medium mb-2">
            Features <span className="text-red-500">*</span>
          </Label>
          <div className="flex flex-col gap-2">
            {FEATURES.map((feature) => (
              <Controller
                key={feature}
                name={`features.${feature}`}
                control={control}
                render={({ field }) => (
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={field.value || false}
                      onCheckedChange={field.onChange}
                      className="h-6 w-6 rounded-full border-2 border-borderGray data-[state=checked]:bg-white
                        data-[state=checked]:border-blue data-[state=checked]:text-blue"
                    >
                      <svg
                        className="h-3.5 w-3.5 text-blue"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </Checkbox>
                    <Label>{feature}</Label>
                  </div>
                )}
              />
            ))}
          </div>
          <button
            type="button"
            className="text-blue-600 text-sm font-medium mt-2"
          >
            + Add another feature
          </button>
        </div>
      </div>
    </section>
  );
}

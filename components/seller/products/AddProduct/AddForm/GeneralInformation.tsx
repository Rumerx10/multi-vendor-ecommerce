import CategoryDropdown from "@/components/seller/sellerUtilities/CategoryDropdown";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import ProductImageUpload from "./ProductImageUpload";
import Textarea from "@/components/shared/Textarea";
import Input from "@/components/shared/Input";

const GeneralInformation = () => {
  const { control } = useFormContext();
  return (
    <section className="border border-borderGray rounded-lg flex flex-col w-full gap-5 p-5">
      <h4 className="text-2xl font-medium">General Information</h4>
      <div className="flex flex-col gap-5 w-full">
        <Input
          label="Product Title"
          name="productName"
          placeholder="Enter Product Name"
          required
        />

        <Textarea
          label="Description"
          name="desc"
          placeholder="Enter Product Description"
          required
        />

        {/* Product Images  */}
        <section className="flex flex-col w-full gap-2">
          <label className="font-medium text-lg">
            Product Images <span className="text-tomato">*</span>
          </label>
          <ProductImageUpload />
        </section>

        {/* Category Dropdown  */}
        <div className="flex flex-col w-full gap-2 mb-6">
          <label className="font-medium text-lg">
            Category <span className="text-tomato">*</span>
          </label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <CategoryDropdown value={field.value} onChange={field.onChange} />
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default GeneralInformation;

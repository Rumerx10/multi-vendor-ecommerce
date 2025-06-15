import React from "react";
import Input from "@/components/shared/Input";

const PricingNInventory = () => {
  return (
    <section className="border border-borderGray rounded-lg flex flex-col w-full gap-5 p-5">
      <h4 className="text-2xl font-medium">Pricing & Inventory</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <Input label="Price($)" name="price" placeholder="0.00" required />
        <Input
          label="Sale Price($)"
          name="salePrice"
          placeholder="0.00"
          required
        />
        <Input label="Quantity" name="quantity" placeholder="0" required />
        <Input label="SKU" name="sku" placeholder="e.g. MP-001" required />
      </div>
    </section>
  );
};

export default PricingNInventory;

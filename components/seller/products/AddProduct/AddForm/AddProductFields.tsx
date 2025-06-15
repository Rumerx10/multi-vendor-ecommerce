"use client";
import { useFormContext } from "react-hook-form";
import Specifications from "./Specifications";
import PricingNInventory from "./PricingNInventory";
import AdditionalInformation from "./AdditionalInformation";
import EnableNegotiation from "./EnableNegotiation";
import GeneralInformation from "./GeneralInformation";
import { useEffect } from "react";

const AddProductFields = () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedCategory = watch("category");
  useEffect(() => {
    setValue("brand", "");
  }, [selectedCategory, setValue]);

  return (
    <div className="flex flex-col gap-8">
      {/* General Information */}
      <GeneralInformation />

      {/* Specifications  */}
      <Specifications category={selectedCategory} />

      {/* Pricing & Inventory */}
      <PricingNInventory />

      {/* Enable Negotiation  */}
      <EnableNegotiation />

      {/* Additional Information */}
      <AdditionalInformation />
    </div>
  );
};

export default AddProductFields;

import React from "react";
import { BiArrowBack } from "react-icons/bi";
import AddProductForm from "./AddForm/AddProductForm";
import Link from "next/link";

const AddProduct = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <div className="flex  gap-5 w-full">
        <Link
          href="/seller/products"
          className="group bg-borderGray px-5 flex items-center text-tomato cursor-pointer"
        >
          <BiArrowBack
            size={24}
            className="group-hover:scale-125 duration-300"
          />
        </Link>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold">Add New Product</h3>
          <p className="text-textGray">
            Fill in the details to list your product for sale
          </p>
        </div>
      </div>
      <AddProductForm />
    </div>
  );
};

export default AddProduct;

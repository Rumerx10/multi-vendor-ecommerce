"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import AddProductFields from "./AddProductFields";
import { Trash2 } from "lucide-react";

const AddProductForm = () => {
  const methods = useForm();
  const { reset } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
        <AddProductFields />
        
        <div className="flex items-center justify-between my-40 py-8">
          <div className="cursor-pointer flex items-center gap-2.5 px-5 py-4 rounded-sm border border-liteTomato hover:bg-liteTomato duration-300">
            <Trash2 className="w-6 h-6 text-tomato" />
            <div className="font-medium text-tomato">Discard</div>
          </div>
          <div className="flex gap-2.5 items-center font-medium">
            <button type="submit" className=" cursor-pointer px-5 py-4 rounded-sm border border-borderGray hover:bg-borderGray duration-300">Save Draft</button>
            <div className=" cursor-pointer px-5 py-4 rounded-sm bg-tomato text-white hover:bg-hoverTomato">Send for Review</div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddProductForm;

import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const Textarea = ({
  label,
  name,
  placeholder,
  required,
  rows=10
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  rows?:number;
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col w-full gap-2">
      <label className="font-medium text-lg">
        {label} {required && <span className="text-tomato">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div>
            <textarea
              rows={rows}
              {...field}
              value={field.value ?? ""}
              placeholder={placeholder}
              className="resize-none rounded-lg p-5 py-3 border border-borderGray w-full"
            />
            {errors[name] && (
              <p className="text-red-500 text-sm">
                {String(errors[name]?.message)}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default Textarea;

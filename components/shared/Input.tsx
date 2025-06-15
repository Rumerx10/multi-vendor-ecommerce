import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const Input = ({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
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
            <input
              {...field}
              value={field.value ?? ""}
              placeholder={placeholder}
              className="rounded-lg px-5 border border-borderGray h-[52px] p-2 w-full"
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

export default Input;

import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const EnableNegotiation = () => {
  const { control } = useFormContext();
  return (
    <section className="border border-borderGray rounded-lg flex flex-col w-full gap-5 p-5">
      <Controller
        name="enable_negotiation"
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <Label
            className={`hover:bg-accent/50 flex items-center gap-3 rounded-lg p-3 
              has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 
              dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950`}
          >
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              className="h-6 w-6 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:bg-blue-700"
            />
            <div className="grid gap-1.5 font-normal">
              <p className="text-xl leading-none">Enable Negotiation</p>
            </div>
          </Label>
        )}
      />
    </section>
  );
};

export default EnableNegotiation;

import Input from "@/components/shared/Input";
import Textarea from "@/components/shared/Textarea";

const AdditionalInformation = () => {
  return (
    <section className="border border-borderGray rounded-lg flex flex-col w-full gap-5 p-5">
      <h4 className="text-2xl font-medium">Additional Information</h4>
      <div className="flex flex-col gap-5 w-full">
        <div>
          <Input
            label="Tags"
            name="tags"
            placeholder="e.g. smartphone, android, 5G (separate with commas)"
            required
          />
          <p className="text-textGray mt-2">
            Tags help buyers find your product when searching
          </p>
        </div>
        <Input
          label="SEO Title"
          name="seoTitle"
          placeholder="Custom titles for search engines"
          required
        />
        <Textarea
          label="SEO Description"
          name="seoDesc"
          placeholder="Custom description for search engines"
          required
          rows={7}
        />
      </div>
    </section>
  );
};

export default AdditionalInformation;

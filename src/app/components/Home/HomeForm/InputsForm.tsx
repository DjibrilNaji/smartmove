import FormData from "../../../models/FormData";
import Input from "./Input";

export default function InputsForm({ fields }: { fields: Array<FormData> }) {
  return (
    <>
      {fields?.map((field, index) => (
        <Input
          key={index}
          placeholder={field.placeholder || ""}
          icon={field.icon}
          alt={field.alt}
          value={field.value}
          type={field.type || ""}
          setObject={field.setField}
        />
      ))}
    </>
  );
}

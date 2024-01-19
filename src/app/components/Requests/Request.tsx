import RequestData from "@/app/models/RequestData";
import Field from "./Field";

export default function Request({ request }: { request: RequestData }) {
  const fields = [
    {
      name: "Prix",
      info: `${request.price} €`,
    },
    {
      name: "Motif",
      info: request.motif,
    },
    {
      name: "Date",
      info: request.date,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {fields.map((field, index) => (
        <Field key={index} field={field.name} info={field.info} />
      ))}
    </div>
  );
}

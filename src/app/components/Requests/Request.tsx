import RequestData from "@/app/models/RequestData";
import Field from "./Field";

export default function Request({ request }: { request: RequestData }) {
  return (
    <div className="flex flex-col gap-4">
      <Field field="Prix" info={request.prix} />
      <Field field="Motif" info={request.motif} />
      <Field field="Date" info={request.date} />
    </div>
  );
}

import FormData from "@/app/models/FormData";
import { FormEvent } from "react";
import InputsForm from "./InputsForm";

export default function Form({
  title,
  handleSubmit,
  error,
  fields,
  buttonName,
  attachment,
}: {
  title: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  error: string;
  fields: Array<FormData>;
  buttonName: string;
  attachment?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="m-4 text-center">
        <p className="font-semibold max-w-56">{title}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 flex flex-col gap-4 shadow-slate-200 shadow-xl rounded-lg border border-special-gray-2"
      >
        <InputsForm fields={fields} />

        <p className="text-red-500 text-sm font-bold">{error}</p>

        {attachment && (
          <div className="bg-black text-white h-10 flex justify-center items-center rounded-lg font-semibold">
            Ajouter des pièces jointes ( reçu, facture )
          </div>
        )}

        <button
          type="submit"
          className="bg-special-yellow h-12 rounded-lg font-semibold justify-center flex items-center"
        >
          {buttonName}
        </button>
      </form>
    </div>
  );
}

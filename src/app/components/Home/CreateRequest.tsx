"use client";
import FormData from "@/app/models/FormData";
import routes from "@/app/routes";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Form from "./HomeForm/Form";
import circle from "/public/svg/circle.svg";
import dateIcon from "/public/svg/date.svg";
import person from "/public/svg/person.svg";

export default function CreateRequest() {
  const [price, setPrice] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [matricule, setMatricule] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const findRoute: Array<FormData> = [
    {
      placeholder: "Prix payé",
      icon: person,
      alt: "Personne",
      value: price,
      type: "number",
      setField: setPrice,
    },
    {
      placeholder: "Motif de remboursement",
      icon: circle,
      alt: "Cirle",
      value: reason,
      setField: setReason,
    },
    {
      icon: dateIcon,
      alt: "Date",
      value: date,
      type: "date",
      setField: setDate,
    },
    {
      placeholder: "Matricule employé",
      icon: person,
      alt: "Personne",
      value: matricule,
      setField: setMatricule,
    },
  ];

  async function fetchData() {
    try {
      const res = await fetch("http://localhost:3030/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: price,
          motif: reason,
          date: date,
          matricule: matricule,
        }),
      });

      if (!res.ok) {
        setError("Une erreur est survenue !");
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      setPrice("");
      setReason("");
      setDate("");
      setMatricule("");

      router.push(routes.result, { scroll: true });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    fetchData();
  };

  return (
    <Form
      title="Faire une demande de remboursement"
      handleSubmit={handleSubmit}
      error={error}
      fields={findRoute}
      buttonName="Faire la demande"
      attachment
    />
  );
}

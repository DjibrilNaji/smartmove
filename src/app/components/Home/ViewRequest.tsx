"use client";

import FormData from "@/app/models/FormData";
import RequestData from "@/app/models/RequestData";
import routes from "@/app/routes";
import { formatDate } from "@/app/utils/formatDate";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Form from "./HomeForm/Form";
import person from "/public/svg/person.svg";

export default function ViewRequest() {
  const [matricule, setMatricule] = useState<string>("");
  const [secretCode, setSecretCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  async function fetchData() {
    try {
      const res = await fetch("http://localhost:3030/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          matricule: matricule,
          secretCode: secretCode,
        }),
      });

      if (!res.ok) {
        setError("Matricule ou code secret incorrect !");
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      setMatricule("");
      setSecretCode("");

      const data = await res.json();

      data.requests.map((request: RequestData) => {
        request.date = formatDate(request.date);
      });

      sessionStorage.setItem("request", JSON.stringify(data.requests));
      sessionStorage.setItem("user", JSON.stringify(data.user));

      router.push(routes.my_requests, { scroll: true });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    fetchData();
  };

  const viewRequests: Array<FormData> = [
    {
      placeholder: "Matricule employé",
      icon: person,
      alt: "Personne",
      value: matricule,
      setField: setMatricule,
    },
    {
      placeholder: "Code secret",
      icon: person,
      alt: "Personne",
      value: secretCode,
      setField: setSecretCode,
      type: "password",
    },
  ];

  return (
    <Form
      title="Consulter mes demandes de remboursement"
      handleSubmit={handleSubmit}
      error={error}
      fields={viewRequests}
      buttonName="Rechercher"
    />
  );
}

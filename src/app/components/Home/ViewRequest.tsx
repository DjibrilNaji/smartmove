"use client";

import RequestData from "@/app/models/RequestData";
import { formatDate } from "@/app/utils/formatDate";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
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
      sessionStorage.setItem("user", JSON.stringify(data.firstName));

      router.push("/my-requests", { scroll: false });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="m-4 text-center">
        <p className="font-semibold">
          Consulter mes demandes de <br /> remboursement
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 flex flex-col gap-4 shadow-slate-200 shadow-xl rounded-lg border-[1px] border-special-gray-2"
      >
        <div className="relative">
          <span className="absolute flex inset-y-0 left-0 pl-2">
            <Image priority src={person} alt="Banniere" />
          </span>
          <input
            className="bg-special-gray w-[416px] h-[52.39px] rounded-lg  border-[1px] border-special-slate pl-8 focus:outline-none"
            placeholder="Matricule employé"
            value={matricule}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setMatricule(event.target.value)
            }
          />
        </div>
        <div className="relative">
          <span className="absolute flex inset-y-0 left-0 pl-2">
            <Image priority src={person} alt="Banniere" />
          </span>
          <input
            type="password"
            className="bg-special-gray w-[416px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-special-slate focus:outline-none"
            placeholder="Code secret"
            value={secretCode}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setSecretCode(event.target.value)
            }
          />
        </div>

        <p className="text-red-500 text-sm font-bold">{error}</p>

        <button
          type="submit"
          className="bg-special-yellow p-[15px 139px 15px 44px;] h-12 rounded-lg font-semibold justify-center flex items-center"
        >
          Rechercher
        </button>
      </form>
    </div>
  );
}

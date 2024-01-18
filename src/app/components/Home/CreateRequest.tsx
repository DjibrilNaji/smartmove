"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import circle from "../../../../public/svg/circle.svg";
import dateIcon from "../../../../public/svg/date.svg";
import person from "../../../../public/svg/person.svg";
import position from "../../../../public/svg/position.svg";

export default function CreateRequest() {
  const [price, setPrice] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [matricule, setMatricule] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

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

      router.push("/result", { scroll: false });
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
          Faire une demande de <br />
          remboursement
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 flex flex-col gap-4 shadow-slate-200 shadow-xl rounded-lg border-[1px] border-special-gray-2"
      >
        <div className="relative">
          <div className="relative mb-4">
            <span className="absolute flex inset-y-0 left-0 pl-2">
              <Image priority src={circle} alt="Circle" />
            </span>
            <input
              className="bg-special-gray w-[416px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-special-slate focus:outline-none"
              placeholder="Prix payé"
              type="number"
              value={price}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPrice(event.target.value)
              }
            />
          </div>
          <div className="relative">
            <span className="absolute flex inset-y-0 left-0 pl-2">
              <Image priority src={position} alt="Position" />
            </span>
            <input
              className="bg-special-gray w-[416px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-special-slate focus:outline-none"
              placeholder="Motif du remboursement"
              value={reason}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setReason(event.target.value)
              }
            />
          </div>
        </div>
        <div className="relative">
          <span className="absolute flex inset-y-0 left-0 pl-2">
            <Image priority src={dateIcon} alt="Date" />
          </span>
          <input
            className="bg-special-gray w-[416px] h-[52.39px] rounded-lg px-8 z-10 border-[1px] text-gray-400 uppercase border-special-slate focus:outline-none"
            type="date"
            value={date}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setDate(event.target.value)
            }
          />
        </div>
        <div className="relative">
          <span className="absolute flex inset-y-0 left-0 pl-2">
            <Image priority src={person} alt="Person" />
          </span>
          <input
            className="bg-special-gray w-[416px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-special-slate focus:outline-none"
            placeholder="Matricule employé"
            value={matricule}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setMatricule(event.target.value)
            }
          />
        </div>
        <div className="bg-black text-white w-[416px] h-[35px] p-[8px 24px 7px 24px] flex justify-center items-center rounded-lg font-semibold">
          Ajouter des pièces jointes ( reçu, facture )
        </div>

        <p className="text-red-500 text-sm font-bold">{error}</p>

        <button
          type="submit"
          className="bg-special-yellow p-[15px 139px 15px 44px;] h-12 rounded-lg font-semibold justify-center flex items-center"
        >
          Faire la demande
        </button>
      </form>
    </div>
  );
}

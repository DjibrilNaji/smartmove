"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Layout/Navbar";
import Request from "../components/Requests/Request";
import RequestData from "../models/RequestData";
import { formatDate } from "../utils/formatDate";
import { currentUser2 } from "../utils/mockData";

export default function Page() {
  const [request, setRequest] = useState<RequestData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3030/requests", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            matricule: currentUser2?.matricule,
            secretCode: currentUser2?.secretCode,
          }),
        });

        const data = await res.json();

        data.map((request: RequestData) => {
          request.date = formatDate(request.date);
        });

        setRequest(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col pb-10">
        <h1 className="text-center font-bold text-4xl m-14">
          Demandes de remboursement de {currentUser2.firstName}
        </h1>

        <div className="flex flex-col gap-10">
          {request.map((request) => (
            <div
              key={request.id}
              className="fborder-2 mx-32 py-6 px-4 rounded-lg shadow-2xl"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-2 mb-2">
                  <div>Demande n° {request.id}</div>
                  <h2 className="text-lg font-semibold"></h2>
                  <p
                    className={`flex ${
                      request.status == "Validée"
                        ? "bg-green-700"
                        : request.status == "Refusée"
                        ? "bg-red-700"
                        : request.status == "En attente"
                        ? "bg-yellow-500"
                        : "bg-black"
                    } text-xs text-white px-5 py-1 font-semibold rounded-full`}
                  >
                    {request.status}
                  </p>
                </div>
                <button className="bg-black text-white text-xs font-semibold rounded-lg px-6 py-1 mb-4">
                  Télécharger les pièces jointes
                </button>
              </div>

              <Request request={request} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

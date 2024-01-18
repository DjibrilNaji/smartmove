"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../components/Layout/Navbar";
import Request from "../components/Requests/Request";
import routes from "../routes";

export default function Page() {
  const [request, setRequest] = useState<Array<any>>();
  const [user, setUser] = useState<Array<any>>();

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined" && window.localStorage) {
        const requests = sessionStorage.getItem("request");
        const user = sessionStorage.getItem("user");

        if (requests && user) {
          setRequest(JSON.parse(requests));
          setUser(JSON.parse(user));
        }

        sessionStorage.removeItem("request");
        sessionStorage.removeItem("user");
      }

      return [];
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col pb-10">
        {request ? (
          <>
            <h1 className="text-center font-bold text-5xl m-14">
              Demandes de remboursement de {user}
            </h1>
            <div className="flex flex-col gap-10">
              {request &&
                request.map((request) => (
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
          </>
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="text-center font-bold text-5xl m-14">
              Aucune demande de remboursement
            </h1>
            <Link
              href={routes.home}
              className="flex text-white w-96 items-center border bg-black rounded-lg px-20 py-1"
            >
              Retourner à la page d’accueil
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

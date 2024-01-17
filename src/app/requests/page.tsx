import Navbar from "../components/Layout/Navbar";
import Request from "../components/Requests/Request";
import RequestData from "../models/RequestData";

export default function Page() {
  const requests: Array<RequestData> = [
    {
      id: 1,
      prix: "120.5",
      motif: "Achat de fournitures",
      date: "2024-01-17",
      status: "Validée",
    },
    {
      id: 2,
      prix: "75.2",
      motif: "Frais de déplacement",
      date: "2024-01-18",
      status: "En attente",
    },
    {
      id: 3,
      prix: "200.0",
      motif: "Services de maintenance",
      date: "2024-01-19",
      status: "Refusée",
    },
    {
      id: 4,
      prix: "50.8",
      motif: "Frais de repas",
      date: "2024-01-20",
      status: "Validée",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col pb-10">
        <h1 className="text-center font-bold text-5xl m-14">
          Demandes de remboursement de ...
        </h1>

        <div className="flex flex-col gap-10">
          {requests.map((request) => (
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

import Image from "next/image";
import circle from "../../../../public/svg/circle.svg";
import date from "../../../../public/svg/date.svg";
import person from "../../../../public/svg/person.svg";
import position from "../../../../public/svg/position.svg";

export default function CreateRequest() {
  return (
    <div className="flex flex-col items-center">
      <div className="m-4 text-center">
        <p className="font-semibold">
          Faire une demande de <br />
          remboursement
        </p>
      </div>
      <form className="bg-white p-8 flex flex-col gap-4 shadow-slate-200 shadow-xl rounded-lg border-[1px] border-special-gray-2">
        <div className="relative">
          <div className="relative mb-4">
            <span className="absolute flex inset-y-0 left-0 pl-2">
              <Image priority src={circle} alt="Circle" />
            </span>
            <input
              className="bg-special-gray w-[416px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-special-slate focus:outline-none"
              placeholder="Prix payé"
            />
          </div>
          <div className="relative">
            <span className="absolute flex inset-y-0 left-0 pl-2">
              <Image priority src={position} alt="Position" />
            </span>
            <input
              className="bg-special-gray w-[416px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-special-slate focus:outline-none"
              placeholder="Motif du remboursement"
            />
          </div>
        </div>
        <div className="relative">
          <span className="absolute flex inset-y-0 left-0 pl-2">
            <Image priority src={date} alt="Date" />
          </span>
          <input
            className="bg-special-gray w-[416px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-special-slate focus:outline-none"
            placeholder="Date"
          />
        </div>
        <div className="relative">
          <span className="absolute flex inset-y-0 left-0 pl-2">
            <Image priority src={person} alt="Person" />
          </span>
          <input
            className="bg-special-gray w-[416px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-special-slate focus:outline-none"
            placeholder="Matricule employé"
          />
        </div>
        <button className="bg-black text-white w-[416px] h-[35px] p-[8px 24px 7px 24px] flex justify-center items-center rounded-lg font-semibold">
          Ajouter des pièces jointes ( reçu, facture )
        </button>
        <button className="bg-special-yellow p-[15px 139px 15px 44px;] h-12 rounded-lg font-semibold justify-center flex items-center">
          Faire la demande
        </button>
      </form>
    </div>
  );
}

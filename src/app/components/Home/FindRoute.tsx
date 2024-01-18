import Image from "next/image";
import arrowSwitch from "../../../../public/svg/arrow-switch.svg";
import circle from "../../../../public/svg/circle.svg";
import date from "../../../../public/svg/date.svg";
import person from "../../../../public/svg/person.svg";
import position from "../../../../public/svg/position.svg";

export default function FindRoute() {
  return (
    <div className="flex flex-col items-center">
      <div className="m-4 text-center mb-10">
        <p className="font-semibold">Rechercher un trajet</p>
      </div>
      <form className="bg-white p-8 flex flex-col gap-4 shadow-slate-200 shadow-xl rounded-lg border-[1px] border-special-gray-2">
        <div className="relative">
          <div className="relative mb-4">
            <span className="absolute flex inset-y-0 left-0 pl-2">
              <Image priority src={circle} alt="Circle" />
            </span>
            <input
              className="bg-special-gray w-[416px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-special-slate focus:outline-none"
              placeholder="Ville de départ"
            />
          </div>

          <div className="relative">
            <span className="absolute flex inset-y-0 left-0 pl-2">
              <Image priority src={position} alt="Position" />
            </span>
            <input
              className="bg-special-gray w-[416px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-special-slate focus:outline-none"
              placeholder="Ville d'arrivée"
            />
          </div>

          <button
            type="button"
            className="absolute bg-white top-1/2 right-4 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 p-3 rounded-full border border-var"
          >
            <Image priority src={arrowSwitch} alt="Arrow switch" />
          </button>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <span className="absolute flex inset-y-0 left-0 pl-2">
              <Image priority src={date} alt="Date" />
            </span>
            <input
              className="bg-special-gray w-[203px] h-[52.39px] rounded-lg pl-8  z-10 border-[1px] border-special-slate focus:outline-none"
              placeholder="Date de départ"
            />
          </div>
          <div className="relative">
            <span className="absolute z-2000 inset-y-0 left-0 flex items-center pl-2"></span>
            <input
              className="bg-special-gray w-[203px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-special-slate focus:outline-none"
              placeholder="Date de retour"
            />
          </div>
        </div>
        <div className="relative">
          <span className="absolute flex inset-y-0 left-0 pl-2">
            <Image priority src={person} alt="Person" />
          </span>
          <input
            type="number"
            className="bg-special-gray w-[416px] h-[52.39px] rounded-lg pl-8 pr-4 z-10 border-[1px] border-special-slate focus:outline-none"
            placeholder="Nombre de passagers"
          />
        </div>
        <button className="bg-special-yellow p-[15px 139px 15px 44px;] h-12 rounded-lg font-semibold justify-center flex items-center">
          Rechercher
        </button>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="accent-green-500 focus:outline-none"
          />
          Rechercher un logement
        </div>
      </form>
    </div>
  );
}

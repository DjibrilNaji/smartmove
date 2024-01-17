import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Layout/Navbar";
import routes from "../routes";

export default function Result() {
  return (
    <>
      <Navbar />

      <div
        className="flex flex-col items-center color-primary"
        style={{ height: "calc(100vh - 142px)" }}
      >
        <Image
          src={routes.img("validation.png")}
          width={277}
          height={350}
          alt="Image de validation"
        />

        <h1 className="text-center font-bold text-5xl m-14">
          Votre demande a été validée !
        </h1>

        <div className="flex flex-col gap-6">
          <Link
            href={routes.home}
            className="flex text-white w-96 items-center border bg-black rounded-lg px-20 py-1"
          >
            Retourner à la page d’accueil
          </Link>

          <Link
            href="/"
            className="flex font-semibold text-lg whitespace-nowrap w-96 items-center border bg-yellow-400 rounded-lg px-20 py-2"
          >
            Faire une nouvelle demande
          </Link>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import CreateRequest from "./components/Home/CreateRequest";
import ViewRequest from "./components/Home/ViewRequest";
import Navbar from "./components/Layout/Navbar";
import banniere from "/public/svg/banniere.svg";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Image priority src={banniere} alt="Banniere" />

      <Link
        className="flex justify-center border mb-6 bg-black text-white px-3 py-1 rounded-lg"
        href="/trajet"
      >
        Rechercher un trajet ?
      </Link>

      <div className="flex flex-col xl:flex-row justify-center gap-8 mb-10">
        <ViewRequest />
        <CreateRequest />
      </div>
    </div>
  );
}

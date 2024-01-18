import Image from "next/image";
import banniere from "../../public/svg/banniere.svg";
import CreateRequest from "./components/Home/CreateRequest";
import FindRoute from "./components/Home/FindRoute";
import ViewRequest from "./components/Home/ViewRequest";
import Navbar from "./components/Layout/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Image priority src={banniere} alt="Banniere" />

      <div className="flex flex-col xl:flex-row justify-center gap-8">
        <ViewRequest />
        <CreateRequest />
        <FindRoute />
      </div>
    </div>
  );
}

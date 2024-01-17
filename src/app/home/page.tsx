import Navbar from "../components/Layout/Navbar";

import CreateRequest from "../components/Home/CreateRequest";
import FindRoute from "../components/Home/FindRoute";
import ViewRequest from "../components/Home/ViewRequest";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <div className="border-2 border border-red-500">
        <ViewRequest />
        <CreateRequest />
        <FindRoute />
      </div>
    </div>
  );
}

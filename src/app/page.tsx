import CreateRequest from "./components/Home/CreateRequest";
import FindRoute from "./components/Home/FindRoute";
import ViewRequest from "./components/Home/ViewRequest";
import Navbar from "./components/Layout/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="275"
        viewBox="0 0 1920 275"
        fill="none"
        className="h-full w-full"
      >
        <path
          d="M0 160.457L80 181.817C160 203.579 320 245.699 480 246C640 245.699 800 203.579 960 176.502C1120 149.425 1253.5 275.301 1413.5 275C1573.5 275.301 1760 149.425 1840 155.141L1920 160.457V0H0V160.457Z"
          fill="#E7EEF6"
        />
      </svg>
      <div className="flex flex-col xl:flex-row gap-8">
        <ViewRequest />
        <CreateRequest />
        <FindRoute />
      </div>
    </div>
  );
}

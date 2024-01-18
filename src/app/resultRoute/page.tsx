import Navbar from "../components/Layout/Navbar";
import Date from "../components/ResultRoute/Date";
import FiltreRoute from "../components/ResultRoute/FiltreRoute";
import ResultRoute from "../components/ResultRoute/ResultRoute";

export default function ResultRoutePage() {
  return (
    <div className="bg-[#ECF4FD]">
      <Navbar />
      <div className=" mx-96 mt-10 p-8">
        <Date />
        <FiltreRoute />
        <ResultRoute />
      </div>
    </div>
  );
}

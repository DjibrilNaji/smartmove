export default function ViewRequest() {
  return (
    <div className="flex flex-col items-center">
      <div className="m-4 text-center">
        <p className="font-semibold">
          Consulter mes demandes de <br /> remboursement
        </p>
      </div>
      <form className="bg-white p-8 flex flex-col gap-4 shadow-slate-200 shadow-xl rounded-lg border-[1px] border-[#F1F2F6]">
        <div className="relative">
          <input
            className="bg-[#F1F3F6] w-[416px] h-[52.39px] rounded-lg  border-[1px] border-[#DEE7F4] pl-8 "
            placeholder="Matricule employé"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            className="bg-[#F1F3F6] w-[416px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-[#DEE7F4]"
            placeholder="Code secret"
          />
        </div>
        <button className="bg-[#FFD720] p-[15px 139px 15px 44px;] h-12 rounded-lg font-semibold justify-center flex items-center">
          Rechercher
        </button>
      </form>
    </div>
  );
}

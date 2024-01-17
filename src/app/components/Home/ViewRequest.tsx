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
          <span className="absolute z-2000 inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.3334 5.83333C13.3334 6.71739 12.9822 7.56523 12.357 8.19036C11.7319 8.81548 10.8841 9.16667 10 9.16667C9.11597 9.16667 8.26812 8.81548 7.643 8.19036C7.01788 7.56523 6.66669 6.71739 6.66669 5.83333C6.66669 4.94928 7.01788 4.10143 7.643 3.47631C8.26812 2.85119 9.11597 2.5 10 2.5C10.8841 2.5 11.7319 2.85119 12.357 3.47631C12.9822 4.10143 13.3334 4.94928 13.3334 5.83333ZM10 11.6667C8.45292 11.6667 6.96919 12.2812 5.87523 13.3752C4.78127 14.4692 4.16669 15.9529 4.16669 17.5H15.8334C15.8334 15.9529 15.2188 14.4692 14.1248 13.3752C13.0308 12.2812 11.5471 11.6667 10 11.6667Z"
                stroke="#E7EEF6"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <input
            className="bg-[#F1F3F6] w-[416px] h-[52.39px] rounded-lg  border-[1px] border-[#DEE7F4] pl-8 "
            placeholder="Matricule employé"
          />
        </div>
        <div className="relative">
          <span className="absolute z-2000 inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.3334 5.83333C13.3334 6.71739 12.9822 7.56523 12.357 8.19036C11.7319 8.81548 10.8841 9.16667 10 9.16667C9.11597 9.16667 8.26812 8.81548 7.643 8.19036C7.01788 7.56523 6.66669 6.71739 6.66669 5.83333C6.66669 4.94928 7.01788 4.10143 7.643 3.47631C8.26812 2.85119 9.11597 2.5 10 2.5C10.8841 2.5 11.7319 2.85119 12.357 3.47631C12.9822 4.10143 13.3334 4.94928 13.3334 5.83333ZM10 11.6667C8.45292 11.6667 6.96919 12.2812 5.87523 13.3752C4.78127 14.4692 4.16669 15.9529 4.16669 17.5H15.8334C15.8334 15.9529 15.2188 14.4692 14.1248 13.3752C13.0308 12.2812 11.5471 11.6667 10 11.6667Z"
                stroke="#E7EEF6"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
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

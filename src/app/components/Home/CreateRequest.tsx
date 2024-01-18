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
            <input
              className="bg-special-gray w-[416px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-special-slate"
              placeholder="Prix payé"
            />
          </div>
          <div className="relative">
            <input
              className="bg-special-gray w-[416px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-special-slate"
              placeholder="Motif du remboursement"
            />
          </div>
          <button
            type="button"
            className="absolute bg-white top-1/2 right-4 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 p-3 rounded-full border border-var"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
            >
              <g clip-path="url(#clip0_3_568)">
                <path
                  d="M0.292021 4.79298L4.28702 0.792983C4.45921 0.620807 4.68831 0.517375 4.93134 0.502094C5.17437 0.486813 5.41462 0.560732 5.60702 0.709983L5.70102 0.792983L9.70702 4.79298C9.8904 4.97205 9.99803 5.21469 10.0077 5.47081C10.0173 5.72693 9.92827 5.97698 9.75888 6.16934C9.5895 6.3617 9.35272 6.48167 9.09743 6.50449C8.84214 6.52731 8.58784 6.45124 8.38702 6.29198L8.29302 6.20898L6.00002 3.91698V14.501C5.99999 14.7459 5.91007 14.9823 5.74731 15.1654C5.58455 15.3484 5.36027 15.4653 5.11702 15.494L5.00002 15.5C4.75493 15.4999 4.5184 15.4099 4.33535 15.2469C4.15229 15.0839 4.03545 14.8594 4.00702 14.616L4.00002 14.501V3.90998L1.70702 6.20698C1.53496 6.37931 1.30592 6.48292 1.06289 6.49839C0.819863 6.51385 0.579543 6.44011 0.387021 6.29098L0.292021 6.20698C0.119697 6.03492 0.0160815 5.80588 0.000616058 5.56285C-0.0148494 5.31983 0.0588979 5.0795 0.208021 4.88698L0.292021 4.79298ZM14.883 0.509983L15 0.502983C15.2451 0.503044 15.4816 0.593108 15.6647 0.756072C15.8478 0.919036 15.9646 1.14355 15.993 1.38698L16 1.50298V12.087L18.293 9.79298C18.4651 9.62066 18.6941 9.51704 18.9371 9.50158C19.1802 9.48611 19.4205 9.55986 19.613 9.70898L19.707 9.79298C19.8793 9.96505 19.983 10.1941 19.9984 10.4371C20.0139 10.6801 19.9401 10.9205 19.791 11.113L19.707 11.207L15.711 15.207C15.539 15.3793 15.3099 15.4829 15.0669 15.4984C14.8239 15.5139 14.5835 15.4401 14.391 15.291L14.297 15.207L10.293 11.207C10.1118 11.0274 10.006 10.7854 9.99734 10.5304C9.98869 10.2755 10.0778 10.0268 10.2465 9.8354C10.4152 9.64399 10.6506 9.52428 10.9046 9.50078C11.1587 9.47728 11.4121 9.55176 11.613 9.70898L11.707 9.79298L14 12.083V1.50298C14.0001 1.25805 14.09 1.02165 14.2527 0.838611C14.4155 0.655576 14.6398 0.53864 14.883 0.509983Z"
                  fill="#E7EEF6"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className="relative">
          <input
            className="bg-special-gray w-[416px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-special-slate"
            placeholder="Date"
          />
        </div>
        <div className="relative">
          <input
            className="bg-special-gray w-[416px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-special-slate"
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

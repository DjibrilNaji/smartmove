/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"
import Navbar from "../components/Layout/Navbar"
import { useState, useEffect } from "react"
import data from "../../../public/json/data.json"
import Image from "next/image"
import routes from "../routes"
import arrowblue from "../../../public/svg/arrowblue.svg"
import depart from "../../../public/svg/depart.svg"
import arrive from "../../../public/svg/arrive.svg"
import passagers from "../../../public/svg/passagers.svg"
import calendar from "../../../public/svg/calendar.svg"
import train from "../../../public/svg/train.svg"
import avion from "../../../public/svg/avion.svg"
import bus from "../../../public/svg/bus.svg"
import oui from "../../../public/svg/oui.svg"
import icon from "../../../public/svg/icon.svg"
import Temp from "../../../public/svg/Temp.svg"

interface TransportData {
  HeureDepart: string
  HeureArrivee: string
  HeureTotale: string
  VilleDepart: string
  VilleArrivee: string
  LieuDepart?: string
  LieuArrivee?: string
  NombrePassagers: number
  Prix: number
  Remboursable: boolean
  [key: string]: any
}

interface TransportTypes {
  [key: string]: TransportData[]
}

export default function Result() {
  const [villeDepart, setVilleDepart] = useState("")
  const [villeArrivee, setVilleArrivee] = useState("")
  const [passengerCount, setPassengerCount] = useState(1)
  const [formattedDateDepart, setFormattedDateDepart] = useState("")
  const [formattedDateArrivee, setFormattedDateArrivee] = useState("")
  const [searchResults, setSearchResults] = useState<TransportData[]>([])
  const [typeTransport, setTypeTransport] = useState<string>("")
  const [activeTransport, setActiveTransport] = useState<null | string>(null)
  const [selectedButton, setSelectedButton] = useState(1)
  const [prixMinimBus, setPrixMinimBus] = useState("")
  const [prixMinimAvion, setPrixMinimAvion] = useState("")
  const [prixMinimTrain, setPrixMinimTrain] = useState("")
  
  const [heureMinimBus, setHeureMinimBus] = useState("")
  const [heureMinimAvion, setHeureMinimAvion] = useState("")
  const [heureMinimTrain, setHeureMinimTrain] = useState("")

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
    }
    return new Date(dateString).toLocaleDateString("fr-FR", options)
  }

  const handleDateDepartChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormattedDateDepart(formatDate(event.target.value))
  }

  const handleDateArriveeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormattedDateArrivee(formatDate(event.target.value))
  }

  const handlePassengerChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value, 10)
    setPassengerCount(isNaN(value) ? 0 : value)
  }

  const handleSwitchCities = () => {
    setVilleDepart(villeArrivee)
    setVilleArrivee(villeDepart)
  }

  const calculAllMinimPrice = () => {
    const resultsForTrain =
      (data as TransportTypes)["train"]?.filter(
        (info: TransportData) =>
          info.VilleDepart.toLowerCase() === villeDepart.toLowerCase() &&
          info.VilleArrivee.toLowerCase() === villeArrivee.toLowerCase()
      ) || []

    setPrixMinimTrain(calculerPrixLePlusBas(resultsForTrain))

    const resultsForAvion =
      (data as TransportTypes)["avion"]?.filter(
        (info: TransportData) =>
          info.VilleDepart.toLowerCase() === villeDepart.toLowerCase() &&
          info.VilleArrivee.toLowerCase() === villeArrivee.toLowerCase()
      ) || []

    setPrixMinimAvion(calculerPrixLePlusBas(resultsForAvion))

    const resultsForBus =
      (data as TransportTypes)["bus"]?.filter(
        (info: TransportData) =>
          info.VilleDepart.toLowerCase() === villeDepart.toLowerCase() &&
          info.VilleArrivee.toLowerCase() === villeArrivee.toLowerCase()
      ) || []

    setPrixMinimBus(calculerPrixLePlusBas(resultsForBus))
  }

  const calculAllMinimHours = () => {
    const resultsForTrain =
      (data as TransportTypes)["train"]?.filter(
        (info: TransportData) =>
          info.VilleDepart.toLowerCase() === villeDepart.toLowerCase() &&
          info.VilleArrivee.toLowerCase() === villeArrivee.toLowerCase()
      ) || []

    setHeureMinimTrain(calculerHeureTotaleLaPlusBasse(resultsForTrain))

    const resultsForAvion =
      (data as TransportTypes)["avion"]?.filter(
        (info: TransportData) =>
          info.VilleDepart.toLowerCase() === villeDepart.toLowerCase() &&
          info.VilleArrivee.toLowerCase() === villeArrivee.toLowerCase()
      ) || []

    setHeureMinimAvion(calculerHeureTotaleLaPlusBasse(resultsForAvion))

    const resultsForBus =
      (data as TransportTypes)["bus"]?.filter(
        (info: TransportData) =>
          info.VilleDepart.toLowerCase() === villeDepart.toLowerCase() &&
          info.VilleArrivee.toLowerCase() === villeArrivee.toLowerCase()
      ) || []

    setHeureMinimBus(calculerHeureTotaleLaPlusBasse(resultsForBus))
  }

  const handleSearchForm = () => {
    setActiveTransport("train")

    const results =
      (data as TransportTypes)["train"]?.filter(
        (info: TransportData) =>
          info.VilleDepart.toLowerCase() === villeDepart.toLowerCase() &&
          info.VilleArrivee.toLowerCase() === villeArrivee.toLowerCase()
      ) || []

    calculAllMinimPrice()
    calculAllMinimHours()
    setSearchResults(results)
  }

  const handleSearch = (type: string) => {
    setActiveTransport(type)

    const results =
      (data as TransportTypes)[type]?.filter(
        (info: TransportData) =>
          info.VilleDepart.toLowerCase() === villeDepart.toLowerCase() &&
          info.VilleArrivee.toLowerCase() === villeArrivee.toLowerCase()
      ) || []

    calculAllMinimPrice()
    calculAllMinimHours()
    setSearchResults(results)
  }

  const calculerPrixLePlusBas = (results: TransportData[]) => {
    if (results.length > 0) {
      const prixMin = Math.min(...results.map((info) => info.Prix))
      return `${prixMin}€`
    }
    return "Aucun résultat"
  }

  const calculerHeureTotaleLaPlusBasse = (results: TransportData[]) => {
    if (results.length > 0) {
      const heuresTotalesEnMinutes = results.map((info) => {
        const [heures, minutes] = info.HeureTotale.split(":").map(Number)
        return heures * 60 + minutes
      })

      if (heuresTotalesEnMinutes.every((heure) => !isNaN(heure))) {
        const heureTotaleMinEnMinutes = Math.min(...heuresTotalesEnMinutes)
        const heuresMin = Math.floor(heureTotaleMinEnMinutes / 60)
        const minutesMin = heureTotaleMinEnMinutes % 60
        return `${heuresMin}h${minutesMin}`
      } else {
        console.error(
          "Certaines valeurs de HeureTotale ne sont pas des nombres valides :",
          heuresTotalesEnMinutes
        )
        return "Erreur"
      }
    }
    return ""
  }

  const handleDateChange = (dayOffset: number) => {
    const currentDate = new Date()
    currentDate.setDate(currentDate.getDate() + dayOffset)

    const formattedDate = currentDate.toISOString().split("T")[0]
    setFormattedDateDepart(formatDate(formattedDate))
  }

  return (
    <>
      <Navbar />
      <div
        className="flex justify-center items-start gap-16 p-0 md:p-4 bg-[#ECF4FD]"
        style={{ height: "calc(100vh - 142px)" }}
      >
        {/* Formulaire à gauche */}

        <div className="flex flex-col items-center self-stretch p-16">
          <h1 className="text-2xl text-blue-500 font-bold mb-4">
            Formulaire de Recherche
          </h1>
          {/* Votre formulaire ici */}
          <form className="w-96 p-8 bg-white border border-gray-300 rounded-lg shadow-md">
            {/* Vos champs de formulaire ici */}
            <div className="relative">
             <div className="mb-4 relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <Image priority src={depart} alt={""} />
              </span>
              <input
                type="text"
                id="villeDepart"
                placeholder="Ville de départ"
                value={villeDepart}
                onChange={(e) => setVilleDepart(e.target.value)}
                className="pl-8 mt-1 p-2 w-full bg-[#F1F3F6] border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4 relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <Image priority src={arrive} alt={""} />
              </span>
                <input
                  type="text"
                  id="villeArrivee"
                  placeholder="Ville d'arrivée"
                  value={villeArrivee}
                  onChange={(e) => setVilleArrivee(e.target.value)}
                  className="pl-8 mt-1 p-2 w-full bg-[#F1F3F6] border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              {/* Div centrée à droite */}
              <button
                type="button"
                onClick={handleSwitchCities}
                className="absolute bg-white top-1/2 right-4 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 p-3 rounded-full border border-var(--www_kombo_co_fr_app_round_2_1_29_2024-02-14_2024-03-30_Paris_Bordeaux_outward_results_1160x880_default-Link-Water, #DEE7F4) bg-var(--www_kombo_co_fr_app_round_2_1_29_2024-02-14_2024-03-30_Paris_Bordeaux_outward_results_1160x880_default-Nero, #FFF)"
              >
                 <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Image priority src={arrowblue} alt={""} />
              </span>
                {/* Le contenu de la div */}
              </button>
            </div>
            <div className="mb-4 flex">
              <div className="mr-2 w-1/2 relative">
                 <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <Image priority src={calendar} alt={""} />
              </span>
                <input
                  type="date"
                  id="DateDepart"
                  placeholder="Date de départ"
                  value={formattedDateDepart}
                  onChange={handleDateDepartChange}
                  className="pl-8 mt-1 p-2 w-full bg-[#F1F3F6] border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                {formattedDateDepart && (
                  <input
                    type="text"
                    className="pl-8 mt-1 p-2 w-full bg-[#F1F3F6] border rounded-md focus:outline-none focus:ring focus:border-blue-300 absolute inset-y-0 left-0"
                    value={formattedDateDepart}
                    readOnly
                  />
                )}
              </div>
              <div className="ml-2 w-1/2 relative">
                <input
                  type="date"
                  id="DateArrivee"
                  placeholder="Date d'arrivée"
                  value={formattedDateArrivee}
                  onChange={handleDateArriveeChange}
                  className="pl-8 mt-1 p-2 w-full border bg-[#F1F3F6] rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                {formattedDateArrivee && (
                  <input
                    type="text"
                    className="pl-8 mt-1 p-2 w-full bg-[#F1F3F6] border rounded-md focus:outline-none focus:ring focus:border-blue-300 absolute inset-y-0 left-0"
                    value={formattedDateArrivee}
                    readOnly
                  />
                )}
              </div>
            </div>
            <div className="mb-4 relative">
               <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <Image priority src={passagers} alt={""} />
              </span>
              <input
                type="number"
                id="NombrePassager"
                placeholder="Nombre de Passagers"
                value={passengerCount}
                onChange={handlePassengerChange}
                className="pl-8 mt-1 p-2 w-full bg-[#F1F3F6] border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              type="button"
              onClick={handleSearchForm}
              className="w-full text-blue-500 bg-white p-2 rounded-md border border-blue-500 transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Rechercher
            </button>
          </form>
        </div>

        {/* Cote Droit */}
        <div className="flex flex-col items-center w-2/4">
          <div className="mb-4 flex space-x-4">
            <button
              onClick={() => {
                handleDateChange(-1)
                setSelectedButton(0)
              }}
              className={`w-[130px] h-[38px] p-[9px 27.38px 9px 27.72px] border-[1px] border-[#838383] flex justify-center items-center rounded-md text-[#838383] ${
                selectedButton === 0
                  ? "w-[130px] h-[44px] p-[12px 27.21px 12px 27.54px]  flex justify-center items-center rounded-md border-none bg-white text-[#208CFB] shadow-md"
                  : ""
              }`}
            >
              Hier
            </button>
            <button
              onClick={() => {
                handleDateChange(0)
                setSelectedButton(1)
              }}
              className={`w-[130px] h-[38px] p-[9px 27.38px 9px 27.72px] px-4 border-[1px] border-[#838383] flex justify-center items-center rounded-md text-[#838383] ${
                selectedButton === 1
                  ? "w-[130px] h-[44px] p-[12px 27.21px 12px 27.54px]  flex justify-center items-center rounded-md border-none bg-white text-[#208CFB] shadow-md"
                  : ""
              }`}
            >
              Aujourd'hui
            </button>
            <button
              onClick={() => {
                handleDateChange(1)
                setSelectedButton(2)
              }}
              className={`w-[130px] h-[38px] p-[9px 27.38px 9px 27.72px] border-[1px] border-[#838383] flex justify-center items-center rounded-md text-[#838383] ${
                selectedButton === 2
                  ? "w-[130px] h-[44px] p-[12px 27.21px 12px 27.54px]  flex justify-center items-center rounded-md border-none bg-white text-[#208CFB] shadow-md"
                  : ""
              }`}
            >
              Demain
            </button>
          </div>

          <div className="bg-white flex my-4 mx-20 rounded-lg flex-col">
            <div className="flex justify-center gap-14">
              {prixMinimTrain && heureMinimTrain ? (
                <button
                  className={`flex flex-col items-center p-2 ${
                    activeTransport === "train"
                      ? "text-[#208CFB]"
                      : searchResults.length > 0
                      ? "text-[#132968]"
                      : "text-[#ACACAF]"
                  }`}
                  onClick={() => handleSearch("train")}
                >
                  <Image priority src={train} alt={""} />
                  <p>{prixMinimTrain}</p>
                  <p>{heureMinimTrain}</p>
                </button>
              ) : (
                <p
                  className={`flex flex-col items-center p-2 ${
                    searchResults.length > 0
                      ? "text-[#132968]"
                      : "text-[#ACACAF]"
                  }`}
                ><Image priority src={train} alt={""} />
                  Aucun résultat
                </p>
              )}

              {prixMinimBus && heureMinimBus ? (
                <button
                  className={`flex flex-col items-center p-2 ${
                    activeTransport === "bus"
                      ? "text-[#208CFB]"
                      : searchResults.length > 0
                      ? "text-[#132968]"
                      : "text-[#ACACAF]"
                  }`}
                  onClick={() => handleSearch("bus")}
                >
                  <Image priority src={bus} alt={""} />
                  <p>{prixMinimBus}</p>
                  <p>{heureMinimBus}</p>
                </button>
              ) : (
                <p
                  className={`flex flex-col items-center p-2 ${
                    searchResults.length > 0
                      ? "text-[#132968]"
                      : "text-[#ACACAF]"
                  }`}
                  >
                    <Image priority src={bus} alt={""} />
                  Aucun résultat
                </p>
              )}

              {prixMinimAvion && heureMinimAvion ? (
                <button
                  type="button"
                  className={`flex flex-col items-center p-2 ${
                    activeTransport === "avion"
                      ? "text-[#208CFB]"
                      : searchResults.length > 0
                      ? "text-[#132968]"
                      : "text-[#ACACAF]"
                  }`}
                  onClick={() => handleSearch("avion")}
                >
                  <Image priority src={avion} alt={""} />
                  <p>{prixMinimAvion}</p>
                  <p>{heureMinimAvion}</p>
                </button>
              ) : (
                <p
                  className={`flex flex-col items-center p-2 ${
                    searchResults.length > 0
                      ? "text-[#132968]"
                      : "text-[#ACACAF]"
                  }`}
                  >
                    <Image priority src={avion} alt={""} />
                  Aucun résultat
                </p>
              )}
            </div>
          </div>

          {/* Affichage des informations du type de transport sélectionné */}
          {searchResults && searchResults.length > 0 ? (
            <div>
              {searchResults.map((info, index) => (
                <div key={index} className="my-4 mx-20 bg-white rounded-xl">
                  <div className="flex justify-between p-4 r ">
                    <div className="flex gap-6">
                      <Image priority src={train} alt={""} />
                      <Image priority src={oui} alt={""} />
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image priority src={Temp} alt={""} />
                      <p>{info.HeureTotale} min</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg flex justify-between  ">
                    <div>
                      <span className="flex text-[#132968] gap-10">
                        <p className="font-semibold">{info.HeureDepart}</p>
                        <span className="flex gap-1 items-center">
                          <p className="font-bold">{info.VilleDepart}</p>
                          <p className="overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[150px]">
                            {info.LieuDepart}
                          </p>
                        </span>
                      </span>
                      <span className="flex text-[#132968] gap-10">
                        <p className="font-semibold">{info.HeureArrivee}</p>
                        <span className="flex gap-1 items-center">
                          <p className="font-bold">{info.VilleArrivee}</p>
                          <p className="overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[150px]">
                            {info.LieuArrivee}
                          </p>
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center justify-end">
                        <span className="flex items-center">
                          <p className="text-sm text-[#838383]">
                            {info.NombrePassagers}
                          </p>
                           <Image priority src={icon} alt={""} />
                        </span>
                        <p className="font-extrabold text-2xl text-[#208CFB]">
                          {info.Prix * info.NombrePassagers}€
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p
                          className={`text-sm ${
                            info.Remboursable
                              ? "text-[#178737]"
                              : "text-red-500"
                          }`}
                        >
                          {info.Remboursable
                            ? "Remboursable"
                            : "Non remboursable"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <Image
                src={routes.img("chapeau-valise.png")}
                width={277}
                height={350}
                alt="Image de validation"
              />
              <p className="flex items-center justify-center text-[#132968] text-xl font-bold my-4">
                Aucun résultat correspondant à vos critères de recherche.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
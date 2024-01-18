/* eslint-disable react/no-unescaped-entities */
"use client"
import Navbar from "../components/Layout/Navbar";
import { useState } from 'react';
import data from "../../../public/json/data.json" 

interface TransportData {
  HeureDepart: string;
  HeureArrivee: string;
  HeureTotale: string;
  VilleDepart: string;
  VilleArrivee: string;
  LieuDepart?: string; 
  LieuArrivee?: string;
  NombrePassagers: number;
  Prix: number;
  Remboursable: boolean;
}

interface TransportTypes {
  [key: string]: TransportData[];
}

export default function Result() {
  const [villeDepart, setVilleDepart] = useState('');
  const [villeArrivee, setVilleArrivee] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  const [formattedDateDepart, setFormattedDateDepart] = useState('');
  const [formattedDateArrivee, setFormattedDateArrivee] = useState('');

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  const handleDateDepartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormattedDateDepart(formatDate(event.target.value));
  };

  const handleDateArriveeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormattedDateArrivee(formatDate(event.target.value));
  };

  const handlePassengerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setPassengerCount(isNaN(value) ? 0 : value);
  };

  const handleSwitchCities = () => {
    setVilleDepart(villeArrivee);
    setVilleArrivee(villeDepart);
  };

  const [typeTransport, setTypeTransport] = useState('');
  const [informationsTransport, setInformationsTransport] = useState<TransportData[] | null>(null);

  const handleTypeTransportChange = (type: string) => {
  setTypeTransport(type);

  switch (type) {
    case 'avion':
      setInformationsTransport(data.avion as TransportData[]);
      break;
    case 'train':
      setInformationsTransport(data.train as TransportData[]);
      break;
    case 'bus':
      setInformationsTransport(data.bus as TransportData[]);
      break;
    default:
      setInformationsTransport(null);
  }
};

const [searchResults, setSearchResults] = useState<TransportData[]>([]);

const handleSearch = () => {
  if (villeDepart && villeArrivee) {
    const results = filterInformationsTransport();
    setSearchResults(results);
  } else {
    console.error('Ville non saisies');
    // Affichez un message d'erreur ou gérez le cas où les villes ne sont pas saisies
  }
};


const filterInformationsTransport = () => {
  if (typeTransport && typeTransport in data) {
    const filteredResults = (data as TransportTypes)[typeTransport]?.filter((info: TransportData) =>
      info.VilleDepart.toLowerCase() === villeDepart.toLowerCase() &&
      info.VilleArrivee.toLowerCase() === villeArrivee.toLowerCase()
    );
    return filteredResults || [];
  }
  return [];
};

  const calculerPrixLePlusBas = (results: TransportData[]) => {
  if (results.length > 0) {
    const prixMin = Math.min(...results.map(info => info.Prix));
    return `${prixMin}€`;
  }
  return 'Aucun résultat';
};

  const calculerHeureTotaleLaPlusBasse = (results: TransportData[]) => {
    if (results.length > 0) {
      const heuresTotalesEnMinutes = results.map(info => {
        const [heures, minutes] = info.HeureTotale.split(':').map(Number);
        return heures * 60 + minutes;
      });

      if (heuresTotalesEnMinutes.every(heure => !isNaN(heure))) {
        const heureTotaleMinEnMinutes = Math.min(...heuresTotalesEnMinutes);
        const heuresMin = Math.floor(heureTotaleMinEnMinutes / 60);
        const minutesMin = heureTotaleMinEnMinutes % 60;
        return `${heuresMin} heures ${minutesMin} minutes`;
      } else {
        console.error('Certaines valeurs de HeureTotale ne sont pas des nombres valides :', heuresTotalesEnMinutes);
        return 'Erreur';
      }
    }
    return 'Aucun résultat';
  };


  const handleDateChange = (dayOffset: number) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + dayOffset);

    const formattedDate = currentDate.toISOString().split('T')[0];
    setFormattedDateDepart(formatDate(formattedDate));
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start gap-16 p-0 md:p-4">
        {/* Formulaire à gauche */}
        <div className="flex flex-col items-center self-stretch p-16">
          <h1 className="text-2xl text-blue-500 font-bold mb-4">Formulaire de Recherche</h1>
          {/* Votre formulaire ici */}
          <form className="w-96 p-8 bg-white border border-gray-300 rounded-lg shadow-md">
            {/* Vos champs de formulaire ici */}
            <div className="relative">
              <div className="mb-4">
                <input
                  type="text"
                  id="villeDepart"
                  placeholder="Ville de départ"
                  value={villeDepart}
                  onChange={(e) => setVilleDepart(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="villeArrivee"
                  placeholder="Ville d'arrivée"
                  value={villeArrivee}
                  onChange={(e) => setVilleArrivee(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              {/* Div centrée à droite */}
              <button
                type="button"
                onClick={handleSwitchCities}
                className="absolute bg-white top-1/2 right-4 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 p-3 rounded-full border border-var(--www_kombo_co_fr_app_round_2_1_29_2024-02-14_2024-03-30_Paris_Bordeaux_outward_results_1160x880_default-Link-Water, #DEE7F4) bg-var(--www_kombo_co_fr_app_round_2_1_29_2024-02-14_2024-03-30_Paris_Bordeaux_outward_results_1160x880_default-Nero, #FFF)">
                {/* Le contenu de la div */}
              </button>
            </div>
            <div className="mb-4 flex">
              <div className="mr-2 w-1/2 relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  {/* Icône */}
                </span>
                <input
                  type="date"
                  id="DateDepart"
                  placeholder="Date de départ"
                  value={formattedDateDepart}
                  onChange={handleDateDepartChange}
                  className="pl-8 mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                {formattedDateDepart && (
                  <input
                    type="text"
                    className="pl-8 mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 absolute inset-y-0 left-0"
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
                  className="pl-8 mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                {formattedDateArrivee && (
                  <input
                    type="text"
                    className="pl-8 mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 absolute inset-y-0 left-0"
                    value={formattedDateArrivee}
                    readOnly
                  />
                )}
              </div>
            </div>
            <div className="mb-4 relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                {/* Icône */}
              </span>
              <input
                type="number"
                id="NombrePassager"
                placeholder="Nombre de Passagers"
                value={passengerCount}
                onChange={handlePassengerChange}
                className="pl-8 mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
                type="button"
                onClick={handleSearch}
                className="w-full text-blue-500 bg-white p-2 rounded-md border border-blue-500 transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Rechercher
              </button>
          </form>
        </div>

        {/* Cote Droit */}
        <div className="flex flex-col items-center w-2/4">    
          <div className="mb-4 flex">
            <button
              onClick={() => handleDateChange(-1)} 
              className={`px-4 py-2 mr-2 rounded-full bg-blue-500 text-white`}
            >
              Hier
            </button>
            <button
              onClick={() => handleDateChange(0)} 
              className={`px-4 py-2 mr-2 rounded-full bg-blue-500 text-white`}
            >
              Aujourd'hui
            </button>
            <button
              onClick={() => handleDateChange(1)} 
              className={`px-4 py-2 rounded-full bg-blue-500 text-white`}
            >
              Demain
            </button>
          </div>

          <div className="mb-4 flex">
            <button
              onClick={() => handleTypeTransportChange('avion')}
              className={`px-4 py-2 mr-2 rounded-full bg-red-500 text-white`}
            >
              Avion
            </button>
            <button
              onClick={() => handleTypeTransportChange('train')}
              className={`px-4 py-2 mr-2 rounded-full bg-red-500 text-white`}
            >
              Train
            </button>
            <button
              onClick={() => handleTypeTransportChange('bus')}
              className={`px-4 py-2 rounded-full bg-red-500 text-white`}
            >
              Bus
            </button>
          </div>

          <div className="mb-4">
            <p>Prix le plus bas : {calculerPrixLePlusBas(searchResults)}</p>
            <p>Heure totale la plus basse : {calculerHeureTotaleLaPlusBasse(searchResults)}</p>
          </div>

          {/* Affichage des informations du type de transport sélectionné */}
          {searchResults && (
            <div>
              {searchResults.map((info, index) => (
                 <div key={index} className="border border-gray-300 rounded-lg p-4 mb-4 flex justify-between">
                  {/* Horaires de départ et d'arrivée */}
                  <div className="writing-vertical-rl text-upright mr-4">
                    <p>{info.HeureDepart}</p>
                    <p>{info.HeureArrivee}</p>
                  </div>
                  {/* Ville de départ et heure de départ */}
                  <div className="flex flex-col items-start">
                    <p>{info.VilleDepart}</p>
                    <p>{info.LieuDepart}</p>
                  </div>
                  {/* Ville d'arrivée et heure d'arrivée */}
                  <div className="flex flex-col items-start">
                    <p>{info.VilleArrivee}</p>
                    <p>{info.LieuArrivee}</p>
                  </div>
                  {/* Nombre de passagers */}
                  <div className="flex flex-col items-start">
                    <p>Passagers: {info.NombrePassagers}</p>
                    <p>Prix total: {info.Prix * info.NombrePassagers}€</p>
                    <p>{info.Remboursable ? 'Remboursable' : 'Non remboursable'}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>

      </div>
            </>
  );
}


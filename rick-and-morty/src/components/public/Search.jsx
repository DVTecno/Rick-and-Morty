import React, { useState, useEffect } from "react";
import RickAndMortyService from "../../services/RickAndMorty.service";
import { Link } from "react-router-dom";

export const Search = ({ nombreBusqueda }) => {
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const buscarPersonajes = async () => {
      try {
        const response = await RickAndMortyService.getAllCharacters();
        if (response && response.results && Array.isArray(response.results)) {
          const filteredCharacters = response.results.filter((character) =>
            character.name.toLowerCase().includes(nombreBusqueda.toLowerCase())
          );
          setResultados(filteredCharacters);
        }
      } catch (error) {
        console.error("Error al buscar personajes:", error);
      }
    };

    if (nombreBusqueda.trim() !== "") {
      buscarPersonajes();
    } else {
      setResultados([]);
    }
  }, [nombreBusqueda]);

 
  return (
    <div>
      {nombreBusqueda.trim() !== "" && (
        <ul>
          {resultados.map((personaje) => (
            <li key={personaje.id}>
              <Link to={`/details/${personaje.id}`}>
                {personaje.name} - {personaje.species} - {personaje.status}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


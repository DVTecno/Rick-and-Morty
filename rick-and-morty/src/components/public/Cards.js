import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import RickAndMortyService from "../../services/RickAndMorty.service";
import { Link, useParams } from "react-router-dom";

export const Cards = () => {
  const [personajes, setPersonajes] = useState([]);
  const [paginasTotales, setPaginasTotales] = useState(1);

  const { numeroPagina } = useParams();
  const paginaActual = numeroPagina ? parseInt(numeroPagina, 10) : 1;

  useEffect(() => {

    cargarPersonajes(paginaActual);
  }, [paginaActual]);

  const cargarPersonajes = (id) => {
    RickAndMortyService.getAllCharacters(id)
      .then((data) => {
        if (data.results) {
          setPersonajes(data.results);
          setPaginasTotales(data.info.pages);
        } else {
          console.log("Data o data.results es indefinida.");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  };

  const paginaAnteriorLink =
    paginaActual === 1 ? null : (
      <Link
        to={`/page/${paginaActual > 1 ? paginaActual - 1 : 1}`}
        className="btn btn-dark btn-sm m-2"
      >
        Anterior
      </Link>
    );

  const siguientePaginaLink =
    paginaActual < paginasTotales ? (
      <Link
        to={`/page/${
          paginaActual < paginasTotales ? paginaActual + 1 : paginasTotales
        }`}
        className="btn btn-dark btn-sm m-2"
      >
        Siguiente
      </Link>
    ) : null;

  return (
    <div className="container">
      <div className="container mb-2">
        <h1 className="text-center text-dark display-6">Rick And Morty</h1>
        <p class="text-center lead">
          Bienvenido a la guía de Rick and Morty, donde encontrarás información
          detallada sobre los personajes de la serie. Explora estas 42 páginas
          para conocer a fondo a cada uno de ellos.
        </p>
      </div>
      <div className="d-flex justify-content-between">
        {paginaAnteriorLink}
        {siguientePaginaLink}
      </div>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {personajes.map((p) => (
              <Card personaje={p} key={p.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

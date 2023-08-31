import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import RickAndMortyService from "../../services/RickAndMorty.service";
import { BsReply } from "react-icons/bs";

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    RickAndMortyService.getCharacterById(id).then((data) => setPersonaje(data));
    console.log(personaje);
  }, [id]);

  const handleVolver = () => {
     window.scrollTo(0, parseInt(scrollPosition, 10));
    navigate(-1);
  };
const location = useLocation();
const scrollPosition = new URLSearchParams(location.search).get(
  "scrollPosition"
);


  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <button
                onClick={handleVolver}
                className="btn btn-dark btn-sm mb-3"
              >
                <BsReply className="me-2" style={{ fontSize: "1.2rem" }} />{" "}
                Volver
              </button>
              <div className="text-center">
                <img
                  src={personaje.image}
                  alt="Imagen de personaje"
                  className="img-fluid"
                />
              </div>
              <h2 className="card-title text-center mt-3">{personaje.name}</h2>
              <h6>
                Género: <span className="text-muted">{personaje.gender}</span>
              </h6>
              <h6>
                Estado:{" "}
                <span className="text-muted">
                  Estado: {personaje.status === "Alive" ? "Vivo" : "Muerto"}
                </span>
              </h6>

              <h6>
                Número de episodios:{" "}
                <span className="text-muted">
                  {personaje.episode
                    ? personaje.episode.length
                    : "No disponible"}
                </span>
              </h6>
              <h6>
                Fecha de creación:{" "}
                <span className="text-muted">
                  {personaje.created
                    ? new Date(personaje.created).toLocaleDateString()
                    : "No disponible"}
                </span>
              </h6>
              <h6>
                Especie: <span className="text-muted">{personaje.species}</span>
              </h6>
              <h6>
                Ubicación:{" "}
                <span className="text-muted">
                  {personaje.location
                    ? personaje.location.name
                    : "No disponible"}
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

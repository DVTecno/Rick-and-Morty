import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Card = ({ personaje }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (personaje) {
      setLoading(false);
    }
  }, [personaje]);

  return (
    <div className="col">
      <div className="card shadow-lg">
        {loading ? (
          <div>
            Cargando...{" "}
            <img
              src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
              alt="Rick and Morty"
            />
          </div>
        ) : (
          <>
            <img width="100%" src={personaje.image} alt="Imagen de personaje" />
            <div className="card-body">
              <strong className="d-inline-block mb-2 text-success">
                {personaje.species}
              </strong>
              <h3 className="mb-0 text-dark">{personaje.name}</h3>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link
                    to={`/details/${personaje.id}`}
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Ver Detalle
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

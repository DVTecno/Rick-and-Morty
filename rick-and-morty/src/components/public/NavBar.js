import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search } from "./Search";

export const NavBar = () => {
   const [searchValue, setSearchValue] = useState(""); 

   const handleSearchChange = (event) => {
     setSearchValue(event.target.value); 
   };
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <img className="App-logo" height="52" src="dog.png" alt="" />

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink
                to={"/"}
                className="btn btn-outline-dark text-light mr-auto"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contacto"}
                className="btn btn-outline-dark text-light "
                activeClassName="active"
              >
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className="btn btn-outline-dark text-light "
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
          </ul>

          <div className="text-end">
            <Link to={"/user-form"} className="btn btn-outline-light me-2">
              Iniciar sesión
            </Link>
            <Link to={"/user-form-register"} className="btn btn-warning me-2">
              Registrarse
            </Link>
          </div>
        </div>
        <form class="d-flex mt-3" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Búsqueda por nombre"
            aria-label="Search"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </form>
          <Search nombreBusqueda={searchValue} />
      </div>
    </header>
  );
};

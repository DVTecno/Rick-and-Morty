import "../../App.css";
import React, { useState } from "react";

export const Footer = () => {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(count);

  const anio = new Date().getFullYear();
  const companyName = " DVCode";

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-tertiary">
          &copy; {anio} {companyName}, Inc
        </p>
        <span className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <button
            className="btn btn-dark border shadow"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </button>
          <button
            className="btn btn-dark border shadow"
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
            disabled={count === 0} 
          >
            Decrement
          </button>
          <h1 className="display-5 m-3 mb-4"> {count}</h1>
          <img
            className="App-logo"
            height="52"
            src="dog.png"
            alt="perro-giratorio"
          />
        </span>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useUserForm } from "../../../hooks/Custom.hooks";
import UseService from "../../../services/UserService";

export const UserForm = () => {
  const { form, setForm, handleChanges } = useUserForm();
  console.log("form", form.email);
  const [areEquals, setAreEquals] = useState(true);

  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  useEffect(() => {
    const { password } = form;
    setAreEquals(password === passwordConfirmation);
  }, [passwordConfirmation]);
  console.log("form", form);

  const handleSubmit = (e) => {
    alert("Registrando usuario...");
   e.preventDefault();
    UseService.save(form);
    setTimeout(() => {
      setPasswordConfirmation("");
    }, 1000);
  };

  return (
    <div className="mx-auto mt-5">
      <h4 className="mb-3 text-center">Iniciar sesión</h4>
      <form
        className={`mx-auto needs-validation ${
          window.innerWidth >= 768 ? "w-25" : "w-75"
        }`}
        noValidate
      >
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              name="email"
              onChange={handleChanges}
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Clave
            </label>
            <input
              type="password"
              className="form-control"
              id="address"
              placeholder="Clave"
              name="password"
              required
              onChange={handleChanges}
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="password2" className="form-label">
              Repetir Clave
            </label>
            <input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Repetir clave"
              onChange={handlePasswordConfirmation}
            />
            {!areEquals && (
              <div className="form-text list-group-item-danger">
                Las claves no son iguales.
              </div>
            )}
          </div>

          <hr className="my-4" />

          <button
            disabled={!form.email || !areEquals}
            className="w-100 btn btn-primary btn-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};

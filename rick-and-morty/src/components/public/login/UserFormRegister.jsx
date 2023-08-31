import { useForm } from "react-hook-form";

import React from "react";

const UserFormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    //reset
  } = useForm({
    defaultValues: {
      nombre: "Diego",
      correo: "deprueba@gmail.com",
    },
  });
  console.log(errors);
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert("Formulario enviado");
    setValue("nombre", "");
    //reset();
    //aqui se envia la data al backend
    //se puede usar axios o fetch
    //incluso se puede usar el hook useEffect
    //tambien se puede usar el hook useMutation de react-query
    //si fuere necesario modificar datos antes de enviarlos al backend segun el formato que este requiera
    //se puede usar el hook useMutation de react-query
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-6 mt-5">
          <h4 className="mb-3 text-center">Registrarse</h4>
          <form
            onSubmit={onSubmit}
            className={`mx-auto ${window.innerWidth >= 768 ? "w-50" : "w-100"}`}
          >
            {/* Nombre */}
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "Nombre es requerido",
                  },
                  minLength: {
                    value: 5,
                    message: "Mínimo 5 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "Máximo 20 caracteres",
                  },
                })}
              />
              {errors.nombre && (
                <span className="text-danger font-weight-bold small">
                  {errors.nombre.message}
                </span>
              )}
            </div>

            {/* Correo */}
            <div className="form-group">
              <label htmlFor="correo">Correo</label>
              <input
                type="email"
                className={`form-control ${errors.correo ? "is-invalid" : ""}`}
                {...register("correo", {
                  required: {
                    value: true,
                    message: "Correo es requerido",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-z]{3,4}$/,
                    message: "Correo inválido",
                  },
                })}
              />
              {errors.correo && (
                <span className="text-danger font-weight-bold small">
                  {errors.correo.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                className="form-control"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Contraseña es requerida",
                  },
                  minLength: {
                    value: 6,
                    message: "Mínimo 6 caracteres",
                  },
                })}
              />
              {errors.password && (
                <span className="text-danger font-weight-bold small">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Confirmar Contraseña */}
            <div className="form-group">
              <label htmlFor="confirmarPassword">Confirmar Contraseña</label>
              <input
                type="password"
                className="form-control"
                {...register("confirmarPassword", {
                  required: {
                    value: true,
                    message: "Confirmar contraseña es requerido",
                  },
                  validate: (value) =>
                    value === watch("password") ||
                    "Las contraseñas no coinciden",
                })}
              />
              {errors.confirmarPassword && (
                <span className="text-danger font-weight-bold small">
                  {errors.confirmarPassword.message}
                </span>
              )}
            </div>

            {/* Fecha de Nacimiento */}
            <div className="form-group">
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
              <input
                type="date"
                className="form-control"
                {...register("fechaNacimiento", {
                  required: {
                    value: true,
                    message: "Fecha de nacimiento es requerida",
                  },
                  validate: (value) => {
                    const hoy = new Date();
                    const fechaNacimiento = new Date(value);

                    // Calcula la diferencia en años entre la fecha actual y la fecha de nacimiento
                    const edad =
                      hoy.getFullYear() - fechaNacimiento.getFullYear();

                    // Compara las fechas teniendo en cuenta el mes y el día de nacimiento
                    const esMayorDeEdad =
                      edad > 18 ||
                      (edad === 18 &&
                        hoy.getMonth() > fechaNacimiento.getMonth()) ||
                      (edad === 18 &&
                        hoy.getMonth() === fechaNacimiento.getMonth() &&
                        hoy.getDate() >= fechaNacimiento.getDate());

                    if (!esMayorDeEdad) {
                      return "Debes ser mayor de edad";
                    }

                    return true;
                  },
                })}
              />
              {errors.fechaNacimiento && (
                <span className="text-danger font-weight-bold small">
                  {errors.fechaNacimiento.message}
                </span>
              )}
            </div>

            {/* País */}
            <div className="form-group mb-3">
              <label htmlFor="pais">País</label>
              <select
                className="form-control"
                {...register("pais", {
                  required: {
                    value: true,
                    message: "País es requerido",
                  },
                })}
              >
                <option value="">Elige una opción</option>
                <option value="ar">Argentina</option>
                <option value="co">Colombia</option>
                <option value="mx">México</option>
              </select>
              {errors.pais && (
                <span className="text-danger font-weight-bold small">
                  {errors.pais.message}
                </span>
              )}
              {watch("pais") === "ar" && (
                <div className="form-group">
                  <label htmlFor="provincia">Provincia</label>
                  <select
                    className="form-control"
                    {...register("provincia", {
                      required: {
                        value: false,
                        message: "Provincia es requerida",
                      },
                    })}
                  >
                    <option value="">Elige una opción</option>
                    <option value="bsas">Buenos Aires</option>
                    <option value="cba">Córdoba</option>
                    <option value="saf">Santa Fe</option>
                    <option value="slt">Salta</option>
                  </select>
                  {watch("pais") === "ar" && !watch("provincia") && (
                    <span className="text-danger font-weight-bold small">
                      Por favor, selecciona una provincia.
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Foto de Perfil */}
            <div className="form-group mb-3">
              <label htmlFor="foto">Foto de perfil</label>
              <input
                type="file"
                className="form-control-file"
                onChange={(e) => {
                  setValue("fotoDelUsuario", e.target.files[0].name);
                }}
              />
            </div>

            {/* Acepto términos y condiciones */}
            <div className="form-group mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  {...register("terminos", { required: true })}
                />
                <label className="form-check-label" htmlFor="terminos">
                  Acepto términos y condiciones
                </label>
              </div>
              {errors.terminos && (
                <span className="text-danger font-weight-bold small">
                  Este campo es requerido
                </span>
              )}
            </div>

            {/* Botón de Enviar */}
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>

            <pre>{JSON.stringify(watch(), null, 2)}</pre>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserFormRegister;

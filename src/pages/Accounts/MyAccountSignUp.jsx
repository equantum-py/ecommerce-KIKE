import React from "react";
import signupimage from '../../images/signup-g.svg'
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const MyAccountSignUp = () => {
  return (
    <div>
       <>
            <ScrollToTop/>
            </>
      <>
        {/* section */}
        <section className="my-lg-14 my-8">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                {/* img */}
                <img
                  src={signupimage}
                  alt="Crear cuenta Antojo Casero"
                  className="img-fluid"
                />
              </div>
              {/* col */}
              <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                <div className="mb-lg-9 mb-5">
                  <h1 className="mb-1 h2 fw-bold">Crear cuenta</h1>
                  <p>¡Bienvenido a Antojo Casero! Completá tus datos para registrarte.</p>
                </div>
                {/* form */}
                <form>
                  <div className="row g-3">
                    {/* col */}
                    <div className="col">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        aria-label="Nombre"
                        required
                      />
                    </div>
                    <div className="col">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        aria-label="Apellido"
                        required
                      />
                    </div>
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Correo electrónico"
                        required
                      />
                    </div>
                    <div className="col-12">
                      {/* input */}
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Contraseña"
                        required
                      />
                    </div>
                    {/* btn */}
                    <div className="col-12 d-grid">
                      {" "}
                      <button type="submit" className="btn btn-primary">
                        Crear cuenta
                      </button>
                      <span className="navbar-text">
                          ¿Ya tenés cuenta?{" "}

                          <Link to="/MyAccountSignIn">Iniciá sesión</Link>
                        </span>
                    </div>
                    {/* text */}
                    <p>
                      <small>
                        Al registrarte, aceptás nuestros{" "}
                        <Link to="#!"> Términos del servicio</Link> &{" "}
                        <Link to="#!">Política de privacidad</Link>
                      </small>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default MyAccountSignUp;

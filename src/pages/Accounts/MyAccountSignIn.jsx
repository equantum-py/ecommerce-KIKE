import React from "react";
import signinimage from '../../images/signin-g.svg'
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const MyAccountSignIn = () => {
  return (
    <div>
      <>
        <div>
          {/* section */}
          <>
            <ScrollToTop/>
            </>
          <section className="my-lg-14 my-8">
            <div className="container">
              {/* row */}
              <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                  {/* img */}
                  <img
                    src={signinimage}
                    alt="Iniciar sesión Antojo Casero"
                    className="img-fluid"
                  />
                </div>
                {/* col */}
                <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                  <div className="mb-lg-9 mb-5">
                    <h1 className="mb-1 h2 fw-bold">Iniciar sesión</h1>
                    <p>
                      ¡Bienvenido de vuelta! Ingresá tu correo para continuar.
                    </p>
                  </div>
                  <form>
                    <div className="row g-3">
                      {/* row */}
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
                      <div className="d-flex justify-content-between">
                        {/* form check */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                          />
                          {/* label */}{" "}
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Recordarme
                          </label>
                        </div>
                        <div>
                          {" "}
                          ¿Olvidaste tu contraseña?{" "}
                          <Link to="/MyAccountForgetPassword">Recuperarla</Link>
                        </div>
                      </div>
                      {/* btn */}
                      <div className="col-12 d-grid">
                        {" "}
                        <button type="submit" className="btn btn-primary">
                          Iniciar sesión
                        </button>
                      </div>
                      {/* link */}
                      <div>
                        ¿No tenés cuenta?{" "}
                        <Link to="/MyAccountSignUp"> Registrate</Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
};

export default MyAccountSignIn;

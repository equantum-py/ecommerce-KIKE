import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";

const Contact = () => {
  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  return (
    <div>
      <div>
        {loaderStatus ? (
          <div className="loader-container">
            <MagnifyingGlass
              visible={true}
              height="100"
              width="100"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperclassName="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#0aad0a"
            />
          </div>
        ) : (
          <>
           <>
            <ScrollToTop/>
            </>
            <>
              {/* section */}
              <section className="my-lg-14 my-8">
                {/* container */}
                <div className="container">
                  <div className="row">
                    {/* col */}
                    <div className="offset-lg-2 col-lg-8 col-12">
                      <div className="mb-8">
                        {/* heading */}
                        <h1 className="h3">Contacto</h1>
                        <p className="lead mb-0">
                          ¿Tenés alguna consulta, sugerencia o querés hacer un pedido especial?
                          Completá el formulario y nos comunicaremos a la brevedad.
                        </p>
                      </div>
                      {/* form */}
                      <form className="row">
                        {/* input */}
                        <div className="col-md-6 mb-3">
                          <label className="form-label">
                            {" "}
                            Nombre<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Tu nombre"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          {/* input */}
                          <label className="form-label">
                            {" "}
                            Apellido<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Tu apellido"
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          {/* input */}
                          <label className="form-label">
                            {" "}
                            Asunto<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Motivo de tu consulta"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">
                            Correo electrónico<span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="tu@correo.com"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          {/* input */}
                          <label className="form-label"> Teléfono</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Tu número de teléfono"
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          {/* input */}
                          <label className="form-label">Mensaje</label>
                          <textarea
                            rows={3}
                            className="form-control"
                            placeholder="Escribí tu mensaje aquí..."
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-md-12">
                          {/* btn */}
                          <Link to="#" className="btn btn-primary">
                            Enviar mensaje
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import amazonpay from "../images/amazonpay.svg";
import american from "../images/american-express.svg";
import mastercard from "../images/mastercard.svg";
import paypal from "../images/paypal.svg";
import visa from "../images/visa.svg";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div>
      <>
        <footer className="footer mt-8">
          <div className="overlay" />
          <div className="container">
            <div className="row footer-row">
              <div className="col-sm-6 col-lg-3 mb-30">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link to="/">
                      <img
                        src={groceryshop}
                        style={{ width: 300, padding: 20, marginLeft: "-30px" }}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <p className="mb-30">
                    Preparamos con amor cada producto casero. Sabores que recuerdan a casa.
                  </p>
                </div>
                <div className="dimc-protect">
                  <div className="col-lg-5 text-lg-start text-center mb-2 mb-lg-0">
                    <h4>Métodos de pago</h4>
                    <ul className="list-inline d-flex mb-0">
                      <li className="list-inline-item">
                        <Link to="#!">
                          <img src={amazonpay} alt="logo de pago" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#!">
                          <img src={american} alt="logo de pago" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#!">
                          <img src={mastercard} alt="logo de pago" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#!">
                          <img src={paypal} alt="logo de pago" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#!">
                          <img src={visa} alt="logo de pago" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-30">
                <div className="footer-widget mb-0">
                  <h4>Categorías</h4>
                  <div className="line-footer" />
                  <div className="row">
                    <div className="col">
                      <ul className="footer-link mb-0">
                        <li>
                          <Link to="#">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Dulce
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Salado
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Bebidas
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Postres
                          </Link>
                        </li>
                        <li>
                          <Link to=" ">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Saludable
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-30">
                <div className="footer-widget mb-0">
                  <h4>Navegación</h4>
                  <div className="line-footer" />
                  <div className="row">
                    <div className="col">
                      <ul className="footer-link mb-0">
                        <li>
                          <Link to="/Careers">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Inicio
                          </Link>
                        </li>
                        <li>
                          <Link to="/Coupons">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Productos
                          </Link>
                        </li>
                        <li>
                          <Link to="/MyAccountOrder">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>
                            Carrito
                          </Link>
                        </li>
                        <li>
                          <Link to="/MyAccountOrder">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Favoritos
                          </Link>
                        </li>
                        <li>
                          <Link to="/MyAcconutPaymentMethod">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Finalizar compra
                          </Link>
                        </li>
                        <li>
                          <Link to="/Faq">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Preguntas frecuentes
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-30">
                <div className="footer-widget mb-0">
                  <h4>Antojo Casero</h4>
                  <div className="line-footer" />
                  <div className="row">
                    <div className="col">
                      <ul className="footer-link mb-0">
                        <li>
                          <Link to="/AboutUs">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Sobre nosotros
                          </Link>
                        </li>
                        <li>
                          <Link to="/AboutUs">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Nosotros
                          </Link>
                        </li>
                        <li>
                          <Link to="/Blog">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link to="/helpcenter">
                            <span>
                              <i className="fa fa-angle-right" />{" "}
                            </span>{" "}
                            Centro de ayuda
                          </Link>
                        </li>
                        <li>
                          <Link to="/Blog">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Contacto
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-widget mt-8">
                  <div className="newsletter-item">
                    <input
                      type="email"
                      id="email"
                      placeholder="Tu correo electrónico"
                      className="form-control form-control-lg"
                      required
                    />
                    <button type="submit">
                      <i className="fa fa-paper-plane" />
                    </button>
                  </div>
                  <ul
                    className="social-media"
                    style={{ display: "flex", gap: 10 }}
                  >
                    <li>
                      <Link to="#" className="facebook ">
                        <i className="bx bxl-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="twitter">
                        <i className="bx bxl-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="instagram ">
                        <i className="bx bxl-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="linkedin">
                        <i className="bx bxl-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bar ">
            <div className="container text-center">
              <div className="footer-copy">
                <div className="copyright">
                  © {year} Antojo Casero. Todos los derechos reservados.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

export default Footer;

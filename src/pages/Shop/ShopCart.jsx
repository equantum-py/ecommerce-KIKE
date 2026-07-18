import React, { useEffect, useState } from "react";
import formatGuarani from "../../utils/currency";
import { Link } from "react-router-dom";
import productimage1 from '../../images/product-img-1.jpg'
import productimage2 from '../../images/product-img-2.jpg'
import productimage3 from '../../images/product-img-3.jpg'
import productimage4 from '../../images/product-img-4.jpg'
import productimage5 from '../../images/product-img-5.jpg'
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";

const ShopCart = () => {


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
          {/* <PulseLoader loading={loaderStatus} size={50} color="#0aad0a" /> */}
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
        <div>
          {/* section*/}
        
          {/* section */}
          <section className="mb-lg-14 mb-8 mt-8">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-12">
                  {/* card */}
                  <div className="card py-1 border-0 mb-8">
                    <div>
                      <h1 className="fw-bold">Carrito de compras</h1>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              {/* row */}
              <div className="row">
                <div className="col-lg-8 col-md-7">
                  <div className="py-3">
                    {/* alert */}
                    <div className="alert alert-danger p-2" role="alert">
                      Revisá tu pedido antes de continuar.
                    </div>
                    <ul className="list-group list-group-flush">
                      {/* list group */}
                      <li className="list-group-item py-3 py-lg-0 px-0 border-top">
                        {/* row */}
                        <div className="row align-items-center">
                          <div className="col-3 col-md-2">
                            {/* img */}{" "}
                            <img
                              src="/images/producto-predeterminado.svg"
                              alt="Ecommerce"
                              className="img-fluid predetermined-img"
                            />
                          </div>
                          <div className="col-4 col-md-6">
                            {/* title */}
                            <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                            <span>
                              <small className="text-muted">.98 / lb</small>
                            </span>
                            {/* text */}
                            <div className="mt-2 small ">
                              {" "}
                              <Link
                                to
                                ="#!"
                                className="text-decoration-none text-inherit"
                              >
                                {" "}
                                <span className="me-1 align-text-bottom">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-trash-2 text-success"
                                  >
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1={10} y1={11} x2={10} y2={17} />
                                    <line x1={14} y1={11} x2={14} y2={17} />
                                  </svg>
                                </span>
                                <span className="text-muted">Eliminar</span>
                              </Link>
                            </div>
                          </div>
                          {/* input group */}
                          <div className="col-3 col-md-3 col-lg-2">
                            <div className="input-group  flex-nowrap justify-content-center  ">
                              <input
                                type="button"
                                defaultValue="-"
                                className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                                data-field="quantity"
                              />
                              <input
                                type="number"
                                step={1}
                                max={10}
                                defaultValue={1}
                                name="quantity"
                                className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                                data-field="quantity"
                              />
                            </div>
                          </div>
                          {/* price */}
                          <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                            <span className="fw-bold">$5.00</span>
                          </div>
                        </div>
                      </li>
                      {/* list group */}
                      <li className="list-group-item py-3 py-lg-0 px-0">
                        {/* row */}
                        <div className="row align-items-center">
                          <div className="col-3 col-md-2">
                            {/* img */}{" "}
                            <img
                              src="/images/producto-predeterminado.svg"
                              alt="Ecommerce"
                              className="img-fluid predetermined-img"
                            />
                          </div>
                          <div className="col-4 col-md-6">
                            {/* title */}
                            <h6 className="mb-0">NutriChoice Digestive </h6>
                            <span>
                              <small className="text-muted">250g</small>
                            </span>
                            {/* text */}
                            <div className="mt-2 small ">
                              {" "}
                              <Link
                                to
                                ="#!"
                                className="text-decoration-none text-inherit"
                              >
                                {" "}
                                <span className="me-1 align-text-bottom">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-trash-2 text-success"
                                  >
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1={10} y1={11} x2={10} y2={17} />
                                    <line x1={14} y1={11} x2={14} y2={17} />
                                  </svg>
                                </span>
                                <span className="text-muted">Eliminar</span>
                              </Link>
                            </div>
                          </div>
                          {/* input group */}
                          <div className="col-3 col-md-3 col-lg-2">
                            <div className="input-group  flex-nowrap justify-content-center  ">
                              <input
                                type="button"
                                defaultValue="-"
                                className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                                data-field="quantity"
                              />
                              <input
                                type="number"
                                step={1}
                                max={10}
                                defaultValue={1}
                                name="quantity"
                                className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                                data-field="quantity"
                              />
                            </div>
                          </div>
                          {/* price */}
                          <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                            <span className="fw-bold text-danger">$20.00</span>
                            <div className="text-decoration-line-through text-muted small">
                              $26.00
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* list group */}
                      <li className="list-group-item py-3 py-lg-0 px-0">
                        {/* row */}
                        <div className="row align-items-center">
                          <div className="col-3 col-md-2">
                            {/* img */}{" "}
                            <img
                              src="/images/producto-predeterminado.svg"
                              alt="Ecommerce"
                              className="img-fluid predetermined-img"
                            />
                          </div>
                          <div className="col-4 col-md-6">
                            {/* title */}
                            <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                            <span>
                              <small className="text-muted">1 kg</small>
                            </span>
                            {/* text */}
                            <div className="mt-2 small ">
                              {" "}
                              <Link
                                to
                                ="#!"
                                className="text-decoration-none text-inherit"
                              >
                                {" "}
                                <span className="me-1 align-text-bottom">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-trash-2 text-success"
                                  >
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1={10} y1={11} x2={10} y2={17} />
                                    <line x1={14} y1={11} x2={14} y2={17} />
                                  </svg>
                                </span>
                                <span className="text-muted">Eliminar</span>
                              </Link>
                            </div>
                          </div>
                          {/* input group */}
                          <div className="col-3 col-md-3 col-lg-2">
                            <div className="input-group  flex-nowrap justify-content-center  ">
                              <input
                                type="button"
                                defaultValue="-"
                                className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                                data-field="quantity"
                              />
                              <input
                                type="number"
                                step={1}
                                max={10}
                                defaultValue={1}
                                name="quantity"
                                className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                                data-field="quantity"
                              />
                            </div>
                          </div>
                          {/* price */}
                          <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                            <span className="fw-bold">$15.00</span>
                            <div className="text-decoration-line-through text-muted small">
                              $20.00
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* list group */}
                      <li className="list-group-item py-3 py-lg-0 px-0">
                        {/* row */}
                        <div className="row align-items-center">
                          <div className="col-3 col-md-2">
                            {/* img */}{" "}
                            <img
                              src="/images/producto-predeterminado.svg"
                              alt="Ecommerce"
                              className="img-fluid predetermined-img"
                            />
                          </div>
                          <div className="col-4 col-md-6">
                            {/* title */}
                            <h6 className="mb-0">Onion Flavour Potato</h6>
                            <span>
                              <small className="text-muted">250g</small>
                            </span>
                            {/* text */}
                            <div className="mt-2 small ">
                              {" "}
                              <Link
                                to
                                ="#!"
                                className="text-decoration-none text-inherit"
                              >
                                {" "}
                                <span className="me-1 align-text-bottom">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-trash-2 text-success"
                                  >
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1={10} y1={11} x2={10} y2={17} />
                                    <line x1={14} y1={11} x2={14} y2={17} />
                                  </svg>
                                </span>
                                <span className="text-muted">Eliminar</span>
                              </Link>
                            </div>
                          </div>
                          {/* input group */}
                          <div className="col-3 col-md-3 col-lg-2">
                            <div className="input-group  flex-nowrap justify-content-center  ">
                              <input
                                type="button"
                                defaultValue="-"
                                className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                                data-field="quantity"
                              />
                              <input
                                type="number"
                                step={1}
                                max={10}
                                defaultValue={1}
                                name="quantity"
                                className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                                data-field="quantity"
                              />
                            </div>
                          </div>
                          {/* price */}
                          <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                            <span className="fw-bold">$15.00</span>
                            <div className="text-decoration-line-through text-muted small">
                              $20.00
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* list group */}
                      <li className="list-group-item py-3 py-lg-0 px-0 border-bottom">
                        {/* row */}
                        <div className="row align-items-center">
                          <div className="col-3 col-md-2">
                            {/* img */}{" "}
                            <img
                              src="/images/producto-predeterminado.svg"
                              alt="Ecommerce"
                              className="img-fluid predetermined-img"
                            />
                          </div>
                          <div className="col-4 col-md-6">
                            {/* title */}
                            <h6 className="mb-0">Salted Instant Popcorn </h6>
                            <span>
                              <small className="text-muted">100g</small>
                            </span>
                            {/* text */}
                            <div className="mt-2 small ">
                              {" "}
                              <Link
                                to
                                ="#!"
                                className="text-decoration-none text-inherit"
                              >
                                {" "}
                                <span className="me-1 align-text-bottom">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-trash-2 text-success"
                                  >
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1={10} y1={11} x2={10} y2={17} />
                                    <line x1={14} y1={11} x2={14} y2={17} />
                                  </svg>
                                </span>
                                <span className="text-muted">Eliminar</span>
                              </Link>
                            </div>
                          </div>
                          {/* input group */}
                          <div className="col-3 col-md-3 col-lg-2">
                            <div className="input-group  flex-nowrap justify-content-center  ">
                              <input
                                type="button"
                                defaultValue="-"
                                className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                                data-field="quantity"
                              />
                              <input
                                type="number"
                                step={1}
                                max={10}
                                defaultValue={1}
                                name="quantity"
                                className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                                data-field="quantity"
                              />
                            </div>
                          </div>
                          {/* price */}
                          <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                            <span className="fw-bold">$15.00</span>
                            <div className="text-decoration-line-through text-muted small">
                              $25.00
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* btn */}
                    <div className="d-flex justify-content-between mt-4">
                      <Link to
                      ="#!" className="btn btn-primary">
                        Seguir comprando
                      </Link>
                      <Link to
                      ="#!" className="btn btn-dark">
                        Actualizar carrito
                      </Link>
                    </div>
                  </div>
                </div>
                {/* sidebar */}
                <div className="col-12 col-lg-4 col-md-5">
                  {/* card */}
                  <div className="mb-5 card mt-6">
                    <div className="card-body p-6">
                      {/* heading */}
                      <h2 className="h5 mb-4">Resumen del pedido</h2>
                      <div className="card mb-2">
                        {/* list group */}
                        <ul className="list-group list-group-flush">
                          {/* list group item */}
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="me-auto">
                              <div>Subtotal de productos</div>
                            </div>
                            <span>{formatGuarani(70000)}</span>
                          </li>
                          {/* list group item */}
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="me-auto">
                              <div>Cargo por servicio</div>
                            </div>
                            <span>{formatGuarani(3000)}</span>
                          </li>
                          {/* list group item */}
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="me-auto">
                              <div className="fw-bold">Total</div>
                            </div>
                            <span className="fw-bold">{formatGuarani(67000)}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="d-grid mb-1 mt-4">
                        {/* btn */}
                        <button
                          className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                          type="submit"
                        >
                          Finalizar compra — <span className="fw-bold">{formatGuarani(67000)}</span>
                        </button>
                      </div>
                      {/* text */}
                      <p>
                        <small>
                          Al confirmar tu pedido, aceptás los Términos del servicio y la Política de privacidad.
                        </small>
                      </p>
                      {/* heading */}
                      <div className="mt-8">
                        <h2 className="h5 mb-3">Aplicar cupón o tarjeta de regalo</h2>
                        <form>
                          <div className="mb-2">
                            {/* input */}
                            <label
                              htmlFor="giftcard"
                              className="form-label sr-only"
                            >
                              Email address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="giftcard"
                              placeholder="Código de cupón"
                            />
                          </div>
                          {/* btn */}
                          <div className="d-grid">
                            <button
                              type="submit"
                              className="btn btn-outline-dark mb-1"
                            >
                              Aplicar
                            </button>
                          </div>
                          <p className="text-muted mb-0">
                            {" "}
                            <small>Aplican términos y condiciones</small>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </>
    )}
  </div>
    </div>
  );
};

export default ShopCart;

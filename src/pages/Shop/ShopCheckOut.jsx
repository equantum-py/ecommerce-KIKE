import React, { useEffect, useState } from "react";
import formatGuarani from "../../utils/currency";
import { Link } from "react-router-dom";
import productimage1 from '../../images/product-img-1.jpg'
import productimage2 from '../../images/product-img-2.jpg'
import productimage3 from '../../images/product-img-3.jpg'
import productimage4 from '../../images/product-img-4.jpg'
import { MagnifyingGlass } from 'react-loader-spinner'
import ScrollToTop from "../ScrollToTop";

const ShopCheckOut = () => {
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
        {/* section */}
        <section className="mb-lg-14 mb-8 mt-8">
          <div className="container">
            {/* row */}
            <div className="row">
              {/* col */}
              <div className="col-12">
                <div>
                  <div className="mb-8">
                    {/* text */}
                    <h1 className="fw-bold mb-0">Finalizar compra</h1>
                    <p className="mb-0">
                      ¿Ya tenés cuenta? Hacé clic aquí para{" "}
                      <Link to="/MyAccountSignIn">Iniciar sesión</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* row */}
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  {/* accordion */}
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    {/* accordion item */}
                    <div className="accordion-item py-4">
                      <div className="d-flex justify-content-between align-items-center">
                        {/* heading one */}
                        <Link
                          to="#"
                          className="fs-5 text-inherit collapsed h4"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="true"
                          aria-controls="flush-collapseOne"
                        >
                          <i className="feather-icon icon-map-pin me-2 text-muted" />
                          Agregar dirección de entrega
                        </Link>
                        {/* btn */}
                        <Link
                          to="#"
                          className="btn btn-outline-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#addAddressModal"
                        >
                          Nueva dirección{" "}
                        </Link>
                        {/* collapse */}
                      </div>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="mt-5">
                          <div className="row">
                            <div className="col-lg-6 col-12 mb-4">
                              {/* form */}
                              <div className="border p-6 rounded-3">
                                <div className="form-check mb-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="homeRadio"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label text-dark"
                                    htmlFor="homeRadio"
                                  >
                                    Home
                                  </label>
                                </div>
                                {/* address */}
                                <address>
                                  {" "}
                                  <strong>Nitu Chauhan</strong> <br /> 3853 Coal
                                  Road, <br />
                                  Tannersville, Pennsylvania, 18372, USA,
                                  <br />
                                  <abbr title="Phone">P: 402-776-1106</abbr>
                                </address>
                                <span className="text-danger">
                                  Dirección predeterminada{" "}
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-12 mb-4">
                              {/* input */}
                              <div className="border p-6 rounded-3">
                                <div className="form-check mb-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="officeRadio"
                                  />
                                  <label
                                    className="form-check-label text-dark"
                                    htmlFor="officeRadio"
                                  >
                                    Office
                                  </label>
                                </div>
                                <address>
                                  {" "}
                                  <strong>Nitu Chauhan</strong> <br /> 3853 Coal
                                  Road, <br />
                                  Tannersville, Pennsylvania, 18372, USA,
                                  <br />
                                  <abbr title="Phone">P: 402-776-1106</abbr>
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* accordion item */}
                    <div className="accordion-item py-4">
                      <Link
                        to="#"
                        className="text-inherit collapsed h5"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <i className="feather-icon icon-clock me-2 text-muted" />
                        Delivery time
                      </Link>
                      {/* collapse */}
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse "
                        data-bs-parent="#accordionFlushExample"
                      >
                        {/* nav */}
                        <ul
                          className="nav nav-pills nav-pills-light mb-3 nav-fill mt-5"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            {/* button */}
                            <button
                              className="nav-link active"
                              id="pills-today-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-today"
                              type="button"
                              role="tab"
                              aria-controls="pills-today"
                              aria-selected="true"
                            >
                              Today <br />
                              <small>Oct 3</small>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            {/* button */}
                            <button
                              className="nav-link"
                              id="pills-monday-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-monday"
                              type="button"
                              role="tab"
                              aria-controls="pills-monday"
                              aria-selected="false"
                            >
                              Mon <br />
                              <small>Oct 4</small>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            {/* button */}
                            <button
                              className="nav-link"
                              id="pills-Tue-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-Tue"
                              type="button"
                              role="tab"
                              aria-controls="pills-Tue"
                              aria-selected="false"
                            >
                              Tue <br />
                              <small>Oct 5</small>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            {/* button */}
                            <button
                              className="nav-link"
                              id="pills-Wed-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-Wed"
                              type="button"
                              role="tab"
                              aria-controls="pills-Wed"
                              aria-selected="false"
                            >
                              Wed <br />
                              <small>Oct 6</small>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            {/* button */}
                            <button
                              className="nav-link"
                              id="pills-Thu-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-Thu"
                              type="button"
                              role="tab"
                              aria-controls="pills-Thu"
                              aria-selected="false"
                            >
                              Thu <br /> <small>Oct 7</small>{" "}
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            {/* button */}
                            <button
                              className="nav-link"
                              id="pills-Fri-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-Fri"
                              type="button"
                              role="tab"
                              aria-controls="pills-Fri"
                              aria-selected="false"
                            >
                              Fri <br /> <small>Oct 8</small>{" "}
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            {/* button */}
                            <button
                              className="nav-link"
                              id="pills-Sat-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-Sat"
                              type="button"
                              role="tab"
                              aria-controls="pills-Sat"
                              aria-selected="false"
                            >
                              Sat <br /> <small>Oct 9</small>
                            </button>
                          </li>
                        </ul>
                        {/* tab content */}
                        <div className="tab-content" id="pills-tabContent">
                          {/* tab pane */}
                          <div
                            className="tab-pane fade show active"
                            id="pills-today"
                            role="tabpanel"
                            aria-labelledby="pills-today-tab"
                            tabIndex={0}
                          >
                            {/* list group */}
                            <ul className="list-group list-group-flush mt-4">
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault1"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault1"
                                    >
                                      <span>En menos de 2 horas</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                {/* badge */}
                                <div className="col-3 text-center">
                                  {" "}
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault2"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault2"
                                    >
                                      <span>Within 3 Hours</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault3"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault3"
                                    >
                                      <span>1pm - 2pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(0)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-success">Gratis</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault4"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault4"
                                    >
                                      <span>2pm - 3pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                {/* badge */}
                                <div className="col-3 text-center">
                                  {" "}
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault5"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault5"
                                    >
                                      <span>3pm - 4pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                {/* badge */}
                                <div className="col-3 text-center">
                                  {" "}
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-monday"
                            role="tabpanel"
                            aria-labelledby="pills-monday-tab"
                            tabIndex={0}
                          >
                            <ul className="list-group list-group-flush mt-4">
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault6"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault6"
                                    >
                                      <span>En menos de 2 horas</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault7"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault7"
                                    >
                                      <span>En menos de 2 horas</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault8"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault8"
                                    >
                                      <span>1pm - 2pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(0)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-success">Gratis</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault9"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault9"
                                    >
                                      <span>2pm - 3pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault10"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault10"
                                    >
                                      <span>3pm - 4pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-Tue"
                            role="tabpanel"
                            aria-labelledby="pills-Tue-tab"
                            tabIndex={0}
                          >
                            <ul className="list-group list-group-flush mt-4">
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault11"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault11"
                                    >
                                      <span>En menos de 2 horas</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault12"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault12"
                                    >
                                      <span>En menos de 2 horas</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault13"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault13"
                                    >
                                      <span>1pm - 2pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(0)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-success">Gratis</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault14"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault14"
                                    >
                                      <span>2pm - 3pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault15"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault15"
                                    >
                                      <span>3pm - 4pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-Wed"
                            role="tabpanel"
                            aria-labelledby="pills-Wed-tab"
                            tabIndex={0}
                          >
                            <ul className="list-group list-group-flush mt-4">
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault16"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault16"
                                    >
                                      <span>En menos de 2 horas</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault17"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault17"
                                    >
                                      <span>En menos de 2 horas</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault18"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault18"
                                    >
                                      <span>1pm - 2pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(0)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-success">Gratis</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault19"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault19"
                                    >
                                      <span>2pm - 3pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault20"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault20"
                                    >
                                      <span>3pm - 4pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-Thu"
                            role="tabpanel"
                            aria-labelledby="pills-Thu-tab"
                            tabIndex={0}
                          >
                            <ul className="list-group list-group-flush mt-4">
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault21"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault21"
                                    >
                                      <span>En menos de 2 horas</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault22"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault22"
                                    >
                                      <span>En menos de 2 horas</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                {/* badge */}
                                <div className="col-3 text-center">
                                  {" "}
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault23"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault23"
                                    >
                                      <span>1pm - 2pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(0)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-success">Gratis</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault24"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault24"
                                    >
                                      <span>2pm - 3pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault25"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault25"
                                    >
                                      <span>3pm - 4pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-Fri"
                            role="tabpanel"
                            aria-labelledby="pills-Fri-tab"
                            tabIndex={0}
                          >
                            <ul className="list-group list-group-flush mt-4">
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault26"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault26"
                                    >
                                      <span>En menos de 2 horas</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault27"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault27"
                                    >
                                      <span>En menos de 2 horas</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault28"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault28"
                                    >
                                      <span>1pm - 2pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(0)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-success">Gratis</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault29"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault29"
                                    >
                                      <span>2pm - 3pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault30"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault30"
                                    >
                                      <span>3pm - 4pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-Sat"
                            role="tabpanel"
                            aria-labelledby="pills-Sat-tab"
                            tabIndex={0}
                          >
                            <ul className="list-group list-group-flush mt-4">
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault31"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault31"
                                    >
                                      <span>En menos de 2 horas</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault32"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault32"
                                    >
                                      <span>En menos de 2 horas</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault33"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault33"
                                    >
                                      <span>1pm - 2pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(0)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-success">Gratis</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault34"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault34"
                                    >
                                      <span>2pm - 3pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                              {/* list group item */}
                              <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3">
                                {/* col */}
                                <div className="col-4">
                                  <div className="form-check">
                                    {/* form check input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault35"
                                    />
                                    {/* label */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault35"
                                    >
                                      <span>3pm - 4pm</span>
                                    </label>
                                  </div>
                                </div>
                                {/* price */}
                                <div className="col-3 text-center">{formatGuarani(15000)}</div>
                                <div className="col-3 text-center">
                                  <span className="badge bg-danger">Pagado</span>
                                </div>
                                {/* col */}
                                <div className="col-2 text-end">
                                  {" "}
                                  <Link
                                    to="#"
                                    className="btn btn-outline-gray-400 btn-sm text-muted"
                                  >
                                    Choose
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-5 d-flex justify-content-end">
                          <Link
                            to="#"
                            className="btn btn-outline-gray-400 text-muted"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            Prev
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-primary ms-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            Next
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* accordion item */}
                    <div className="accordion-item py-4">
                      <Link
                        to="#"
                        className="text-inherit h5"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <i className="feather-icon icon-shopping-bag me-2 text-muted" />
                        Instrucciones de entrega
                        {/* collapse */}{" "}
                      </Link>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse "
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="mt-5">
                          <label
                            htmlFor="DeliveryInstructions"
                            className="form-label sr-only"
                          >
                            Instrucciones de entrega
                          </label>
                          <textarea
                            className="form-control"
                            id="DeliveryInstructions"
                            rows={3}
                            placeholder="Write Instrucciones de entrega "
                            defaultValue={""}
                          />
                          <p className="form-text">
                            Add instructions for how you want your order shopped
                            and/or delivered
                          </p>
                          <div className="mt-5 d-flex justify-content-end">
                            <Link
                              to="#"
                              className="btn btn-outline-gray-400 text-muted"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                              Prev
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-primary ms-2"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFour"
                              aria-expanded="false"
                              aria-controls="flush-collapseFour"
                            >
                              Next
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* accordion item */}
                    <div className="accordion-item py-4">
                      <Link
                        to="#"
                        className="text-inherit h5"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        <i className="feather-icon icon-credit-card me-2 text-muted" />
                        Forma de pago
                        {/* collapse */}{" "}
                      </Link>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse "
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="mt-5">
                          <div>
                            <div className="card card-bordered shadow-none mb-2">
                              {/* card body */}
                              <div className="card-body p-6">
                                <div className="d-flex">
                                  <div className="form-check">
                                    {/* checkbox */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="paypal"
                                    />
                                    <label
                                      className="form-check-label ms-2"
                                      htmlFor="paypal"
                                    ></label>
                                  </div>
                                  <div>
                                    {/* title */}
                                    <h5 className="mb-1 h6">
                                      {" "}
                                      Pago con PayPal
                                    </h5>
                                    <p className="mb-0 small">
                                      You will be redirected to PayPal website
                                      to complete your purchase securely.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* card */}
                            <div className="card card-bordered shadow-none mb-2">
                              {/* card body */}
                              <div className="card-body p-6">
                                <div className="d-flex mb-4">
                                  <div className="form-check ">
                                    {/* input */}
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="creditdebitcard"
                                    />
                                    <label
                                      className="form-check-label ms-2"
                                      htmlFor="creditdebitcard"
                                    ></label>
                                  </div>
                                  <div>
                                    <h5 className="mb-1 h6">
                                      {" "}
                                      Tarjeta de crédito / débito
                                    </h5>
                                    <p className="mb-0 small">
                                      Safe money transfer using your bank accou
                                      k account. We support Mastercard tercard,
                                      Visa, Discover and Stripe.
                                    </p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12">
                                    {/* input */}
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Card Number
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="1234 4567 6789 4321"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-12">
                                    {/* input */}
                                    <div className="mb-3 mb-lg-0">
                                      <label className="form-label">
                                        Name on card{" "}
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your Nombre"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-3 col-12">
                                    {/* input */}
                                    <div className="mb-3  mb-lg-0 position-relative">
                                      <label className="form-label">
                                        Expiry date{" "}
                                      </label>
                                      <input
                                        className="form-control flatpickr "
                                        type="text"
                                        placeholder="Select Date"
                                      />
                                      <div className="position-absolute bottom-0 end-0 p-3 lh-1">
                                        <i className="bi bi-calendar text-muted" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 col-12">
                                    {/* input */}
                                    <div className="mb-3  mb-lg-0">
                                      <label className="form-label">
                                        CVV code{" "}
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={312}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* card */}
                            <div className="card card-bordered shadow-none mb-2">
                              {/* card body */}
                              <div className="card-body p-6">
                                {/* check input */}
                                <div className="d-flex">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="payoneer"
                                    />
                                    <label
                                      className="form-check-label ms-2"
                                      htmlFor="payoneer"
                                    ></label>
                                  </div>
                                  <div>
                                    {/* title */}
                                    <h5 className="mb-1 h6">
                                      {" "}
                                      Pay with Payoneer
                                    </h5>
                                    <p className="mb-0 small">
                                      You will be redirected to Payoneer website
                                      to complete your purchase securely.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* card */}
                            <div className="card card-bordered shadow-none">
                              <div className="card-body p-6">
                                {/* check input */}
                                <div className="d-flex">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="cashonDelivery"
                                    />
                                    <label
                                      className="form-check-label ms-2"
                                      htmlFor="cashonDelivery"
                                    ></label>
                                  </div>
                                  <div>
                                    {/* title */}
                                    <h5 className="mb-1 h6">
                                      {" "}
                                      Efectivo
                                    </h5>
                                    <p className="mb-0 small">
                                      Pay with cash when your order is
                                      delivered.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Button */}
                            <div className="mt-5 d-flex justify-content-end">
                              <Link
                                to="#"
                                className="btn btn-outline-gray-400 text-muted"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                              >
                                Prev
                              </Link>
                              <Link to="#" className="btn btn-primary ms-2">
                                Confirmar pedido
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12 offset-lg-1 col-lg-4">
                  <div className="mt-4 mt-lg-0">
                    <div className="card shadow-sm">
                      <h5 className="px-6 py-4 bg-transparent mb-0">
                        Detalles del pedido
                      </h5>
                      <ul className="list-group list-group-flush">
                        {/* list group item */}
                        <li className="list-group-item px-4 py-3">
                          <div className="row align-items-center">
                            <div className="col-2 col-md-2">
                              <img
                                src={productimage1}
                                alt="Ecommerce"
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-5 col-md-5">
                              <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                              <span>
                                <small className="text-muted">.98 / lb</small>
                              </span>
                            </div>
                            <div className="col-2 col-md-2 text-center text-muted">
                              <span>1</span>
                            </div>
                            <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                              <span className="fw-bold">{formatGuarani(5000)}</span>
                            </div>
                          </div>
                        </li>
                        {/* list group item */}
                        <li className="list-group-item px-4 py-3">
                          <div className="row align-items-center">
                            <div className="col-2 col-md-2">
                              <img
                                src={productimage2}
                                alt="Ecommerce"
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-5 col-md-5">
                              <h6 className="mb-0">NutriChoice Digestive</h6>
                              <span>
                                <small className="text-muted">250g</small>
                              </span>
                            </div>
                            <div className="col-2 col-md-2 text-center text-muted">
                              <span>1</span>
                            </div>
                            <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                              <span className="fw-bold">$20.00</span>
                              <div className="text-decoration-line-through text-muted small">
                                $26.00
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* list group item */}
                        <li className="list-group-item px-4 py-3">
                          <div className="row align-items-center">
                            <div className="col-2 col-md-2">
                              <img
                                src={productimage3}
                                alt="Ecommerce"
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-5 col-md-5">
                              <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                              <span>
                                <small className="text-muted">1 kg</small>
                              </span>
                            </div>
                            <div className="col-2 col-md-2 text-center text-muted">
                              <span>1</span>
                            </div>
                            <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                              <span className="fw-bold">$15.00</span>
                              <div className="text-decoration-line-through text-muted small">
                                $20.00
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* list group item */}
                        <li className="list-group-item px-4 py-3">
                          <div className="row align-items-center">
                            <div className="col-2 col-md-2">
                              <img
                                src={productimage4}
                                alt="Ecommerce"
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-5 col-md-5">
                              <h6 className="mb-0">Onion Flavour Potato</h6>
                              <span>
                                <small className="text-muted">250g</small>
                              </span>
                            </div>
                            <div className="col-2 col-md-2 text-center text-muted">
                              <span>1</span>
                            </div>
                            <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                              <span className="fw-bold">$15.00</span>
                              <div className="text-decoration-line-through text-muted small">
                                $20.00
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* list group item */}
                        <li className="list-group-item px-4 py-3">
                          <div className="d-flex align-items-center justify-content-between   mb-2">
                            <div>Total de productos</div>
                            <div className="fw-bold">$70.00</div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between  ">
                            <div>
                              Service Fee{" "}
                              <i
                                className="feather-icon icon-info text-muted"
                                data-bs-toggle="tooltip"
                                title="Default tooltip"
                              />
                            </div>
                            <div className="fw-bold">$3.00</div>
                          </div>
                        </li>
                        {/* list group item */}
                        <li className="list-group-item px-4 py-3">
                          <div className="d-flex align-items-center justify-content-between fw-bold">
                            <div>Total</div>
                            <div>{formatGuarani(73000)}</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <>
        <div>
          {/* Modal */}
          <div
            className="modal fade"
            id="deleteModal"
            tabIndex={-1}
            aria-labelledby="deleteModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="deleteModalLabel">
                    Eliminar dirección
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <h6>¿Estás seguro de que quieres eliminar esta dirección?</h6>
                  <p className="mb-6">
                    Jitu Chauhan
                    <br />
                    4450 North Avenue Oakland, <br />
                    Nebraska, United States,
                    <br />
                    402-776-1106
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-gray-400"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal */}
          <div
            className="modal fade"
            id="addAddressModal"
            tabIndex={-1}
            aria-labelledby="addAddressModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                {/* modal body */}
                <div className="modal-body p-6">
                  <div className="d-flex justify-content-between mb-5">
                    {/* heading */}
                    <div>
                      <h5 className="h6 mb-1" id="addAddressModalLabel">
                        Nueva dirección de envío
                      </h5>
                      <p className="small mb-0">
                        Add Nueva dirección de envío for your order delivery.
                      </p>
                    </div>
                    <div>
                      {/* button */}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  {/* row */}
                  <div className="row g-3">
                    {/* col */}
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        aria-label="Nombre"
                        required
                      />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        aria-label="Apellido"
                        required
                      />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Dirección 1"
                      />
                    </div>
                    <div className="col-12">
                      {/* button */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Dirección 2"
                      />
                    </div>
                    <div className="col-12">
                      {/* button */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ciudad"
                      />
                    </div>
                    <div className="col-12">
                      {/* button */}
                      <select className="form-select">
                        <option selected> India</option>
                        <option value={1}>UK</option>
                        <option value={2}>USA</option>
                        <option value={3}>UAE</option>
                      </select>
                    </div>
                    <div className="col-12">
                      {/* button */}
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Gujarat</option>
                        <option value={1}>Northern Ireland</option>
                        <option value={2}> Alaska</option>
                        <option value={3}>Abu Dhabi</option>
                      </select>
                    </div>
                    <div className="col-12">
                      {/* button */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Código postal"
                      />
                    </div>
                    <div className="col-12">
                      {/* button */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Business Name"
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="flexCheckDefault"
                        />
                        {/* label */}
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Set as Default
                        </label>
                      </div>
                    </div>
                    {/* button */}
                    <div className="col-12 text-end">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button className="btn btn-primary" type="button">
                        Guardar dirección
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
     </>
    )}
  </div>
    </div>
  );
};

export default ShopCheckOut;

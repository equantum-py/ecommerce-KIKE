import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import formatGuarani from '../utils/currency';

const products = [
  { id: 1, name: 'Azúcar', category: 'Dulce', price: 8000, img: "/images/producto-predeterminado.svg" },
  { id: 2, name: 'Edulcorante', category: 'Saludable', price: 12000, img: "/images/producto-predeterminado.svg" },
  { id: 3, name: 'Empanada casera de carne con masa de mandioca', category: 'Salado', price: 8000, img: "/images/producto-predeterminado.svg" },
  { id: 4, name: 'Milanesa de carne con mandioca', category: 'Salado', price: 25000, img: "/images/producto-predeterminado.svg" },
  { id: 5, name: 'Milanesa de pollo con mandioca', category: 'Salado', price: 22000, img: "/images/producto-predeterminado.svg" },
  { id: 6, name: 'Sándwich de carne', category: 'Salado', price: 18000, img: "/images/producto-predeterminado.svg" },
  { id: 7, name: 'Sándwich de pollo', category: 'Salado', price: 16000, img: "/images/producto-predeterminado.svg" },
  { id: 8, name: 'Pan casero', category: 'Salado', price: 10000, img: "/images/producto-predeterminado.svg" },
  { id: 9, name: 'Bizcochuelo de naranja', category: 'Postres', price: 30000, img: "/images/producto-predeterminado.svg" },
  { id: 10, name: 'Bizcochuelo de mandarina', category: 'Postres', price: 30000, img: "/images/producto-predeterminado.svg" },
  { id: 11, name: 'Bizcochuelo de chocolate', category: 'Postres', price: 35000, img: "/images/producto-predeterminado.svg" },
  { id: 12, name: 'Jugo natural de pomelo', category: 'Bebidas', price: 10000, img: "/images/producto-predeterminado.svg" },
  { id: 13, name: 'Jugo natural de naranja', category: 'Bebidas', price: 10000, img: "/images/producto-predeterminado.svg" },
  { id: 14, name: 'Jugo natural de limón', category: 'Bebidas', price: 10000, img: "/images/producto-predeterminado.svg" },
  { id: 15, name: 'Jugo natural surtido', category: 'Bebidas', price: 10000, img: "/images/producto-predeterminado.svg" }
];

const ProductItem = () => {
  const handleAddClick = () => {
    Swal.fire({
      icon: 'success',
      title: 'Agregado al carrito',
      text: '¡El producto fue agregado a tu carrito!',
      showConfirmButton: true,
      timer: 3000,
    });
  };

  return (
    <div>
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <div className="section-head text-center mt-8">
                <h3 className='h3style' data-title="Los favoritos de Antojo Casero">Los favoritos de Antojo Casero</h3>
                <div className="wt-separator bg-primarys"></div>
                <div className="wt-separator2 bg-primarys"></div>
              </div>
            </div>
          </div>
          <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
            {products.map(product => (
              <div className="col fade-zoom" key={product.id}>
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative ">
                      <div className=" position-absolute top-0 start-0">
                        <span className="badge badge-disponible">Disponible</span>
                      </div>
                      <Link to="#!">
                        <img
                          src={product.img}
                          alt={product.name}
                          className="mb-3 img-fluid "
                        />
                      </Link>
                      <div className="card-product-action">
                        <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Vista rápida" />
                        </Link>
                        <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Favoritos">
                          <i className="bi bi-heart" />
                        </Link>
                        <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Comparar">
                          <i className="bi bi-arrow-left-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="text-small mb-1">
                      <Link to="#!" className="text-decoration-none text-muted">
                        <small>{product.category}</small>
                      </Link>
                    </div>
                    <h2 className="fs-6">
                      <Link to="#!" className="text-inherit text-decoration-none">
                        {product.name}
                      </Link>
                    </h2>
                    <div>
                      <small className="text-warning">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </small>
                      <span className="text-muted small"> 5 (0)</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="product-price">{formatGuarani(product.price)}</span>
                      </div>
                      <div>
                        <Link to="#!" className="btn btn-antojo-primary btn-sm" onClick={handleAddClick}>
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                          </svg> Agregar al carrito
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductItem;

import React, { useState } from "react";

const Coupons = () => {
  const [appliedCode, setAppliedCode] = useState("");
  const [message, setMessage] = useState("");

  const coupons = [
    { code: "ANTOJO10", description: "10% de descuento en tu primer pedido" },
    { code: "CASERO5K", description: "Gs. 5.000 de descuento en pedidos mayores a Gs. 30.000" },
    { code: "DULCE15", description: "15% de descuento en productos de la categoría Dulce" },
  ];

  const applyCoupon = (code) => {
    setAppliedCode(code);
    setMessage(`¡Cupón "${code}" aplicado con éxito! 🎉`);
  };

  return (
    <div className="coupons-container">
      <div className="row">
        <div className="col-md-12 mb-6">
          <div className="section-head text-center mt-8">
            <h1
              className="h3style"
              style={{ color: "green" }}
              data-title="Cupones y promociones disponibles"
            >
              Cupones y promociones disponibles
            </h1>
            <div className="wt-separator bg-primarys"></div>
            <div className="wt-separator2 bg-primarys"></div>
          </div>
        </div>
      </div>
      <div className="coupons-list">
        {coupons.map((coupon, index) => (
          <div key={index} className="coupon-card">
            <div className="coupon-code">{coupon.code}</div>
            <div className="coupon-desc">{coupon.description}</div>
            <button
              className="apply-btn"
              onClick={() => applyCoupon(coupon.code)}
              disabled={appliedCode === coupon.code}
            >
              {appliedCode === coupon.code ? "Aplicado" : "Aplicar"}
            </button>
          </div>
        ))}
      </div>
      {message && <p className="coupon-message">{message}</p>}
    </div>
  );
};

export default Coupons;

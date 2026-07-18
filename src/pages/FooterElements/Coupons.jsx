import React, { useState } from "react";

const Coupons = () => {
  const [appliedCode, setAppliedCode] = useState("");
  const [message, setMessage] = useState("");

  const coupons = [
    { code: "SAVE50", description: "Get ₹50 off on orders above ₹499" },
    { code: "FRESH20", description: "20% off on fresh vegetables" },
    { code: "FREESHIP", description: "Free delivery on orders above ₹299" },
  ];

  const applyCoupon = (code) => {
    setAppliedCode(code);
    setMessage(`Coupon "${code}" applied successfully! 🎉`);
  };

  return (
    <div className="coupons-container">
      <div className="row">
        <div className="col-md-12 mb-6">
          <div className="section-head text-center mt-8">
            <h1
              className="h3style"
              style={{ color: "var(--brand-success)" }}
              data-title="Available Coupons & Promo Codes"
            >
              Available Coupons & Promo Codes
            </h1>
            <div className="wt-separator bg-primarys"></div>
            <div className="wt-separator2 bg-primarys"></div>
            {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
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
              {appliedCode === coupon.code ? "Applied" : "Apply"}
            </button>
          </div>
        ))}
      </div>
      {message && <p className="coupon-message">{message}</p>}
    </div>
  );
};

export default Coupons;

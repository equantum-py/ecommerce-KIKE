import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "¿Cómo agrego productos al carrito?",
      answer:
        "Explorá los productos y hacé clic en el botón 'Agregar al carrito'. Podés ver tu carrito en cualquier momento haciendo clic en el ícono del carrito.",
    },
    {
      question: "¿Puedo eliminar o cambiar la cantidad de productos en el carrito?",
      answer:
        "Sí, ingresá a la página del carrito. Encontrarás opciones para aumentar, disminuir o eliminar cada producto.",
    },
    {
      question: "¿Necesito crear una cuenta para hacer un pedido?",
      answer:
        "Podés explorar los productos sin cuenta, pero para realizar un pedido es necesario registrarte o iniciar sesión.",
    },
    {
      question: "¿Qué formas de pago se aceptan?",
      answer:
        "Actualmente los métodos de pago disponibles se coordinan directamente con Antojo Casero al momento de confirmar el pedido.",
    },
    {
      question: "¿Cómo hago seguimiento de mi pedido?",
      answer:
        "Después de realizar tu pedido, ingresá a tu perfil y seleccioná 'Mis pedidos' para ver el estado actualizado.",
    },
    {
      question: "¿Los precios están en guaraníes?",
      answer:
        "Sí, todos los precios están expresados en guaraníes paraguayos (Gs.) sin conversión ni comisión adicional.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="row">
        <div className="col-md-12 mb-6">
          <div className="section-head text-center mt-8">
            <h1 className="h3style" style={{ color: "green" }} data-title="Preguntas frecuentes">
              Preguntas frecuentes
            </h1>
            <div className="wt-separator bg-primarys"></div>
            <div className="wt-separator2 bg-primarys"></div>
          </div>
        </div>
      </div>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
                +
              </span>
            </button>
            <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

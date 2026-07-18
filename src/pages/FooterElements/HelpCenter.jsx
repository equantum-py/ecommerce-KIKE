import React from "react";

const HelpCenter = () => {
  const topics = [
    {
      title: "Cómo hacer un pedido",
      faqs: [
        {
          q: "¿Cómo hago un pedido?",
          a: "Explorá los productos, agregálos al carrito y continuá al pago para finalizar tu pedido.",
        },
        {
          q: "¿Puedo cancelar mi pedido?",
          a: "Sí, podés cancelar pedidos desde la sección 'Mis pedidos' antes de que sean preparados.",
        },
      ],
    },
    {
      title: "Pagos y precios",
      faqs: [
        {
          q: "¿En qué moneda están los precios?",
          a: "Todos los precios están expresados en guaraníes paraguayos (Gs.).",
        },
        {
          q: "¿Cómo coordino el pago?",
          a: "Al confirmar tu pedido, nos comunicaremos para coordinar la forma de pago disponible.",
        },
      ],
    },
    {
      title: "Entrega y seguimiento",
      faqs: [
        {
          q: "¿Dónde llegan los pedidos?",
          a: "Actualmente coordinamos entregas dentro del área de cobertura. Consultá tu zona antes de pedir.",
        },
        {
          q: "Falta un producto en mi pedido.",
          a: "Por favor contactanos con el número de tu pedido para solucionar el problema a la brevedad.",
        },
      ],
    },
  ];

  return (
    <div className="help-container">
      <div className="row">
        <div className="col-md-12 mb-6">
          <div className="section-head text-center mt-8">
            <h1 className="h3style" style={{ color: "green" }} data-title="Centro de ayuda">
              Centro de ayuda
            </h1>
            <div className="wt-separator bg-primarys"></div>
            <div className="wt-separator2 bg-primarys"></div>
          </div>
        </div>
      </div>
      <p className="help-subtitle">
        ¿Necesitás ayuda? Explorá los temas a continuación o contactanos directamente.
      </p>

      <div className="help-grid">
        {topics.map((topic, index) => (
          <div key={index} className="help-card">
            <h2 className="help-topic">{topic.title}</h2>
            <ul className="help-faq-list">
              {topic.faqs.map((faq, i) => (
                <li key={i} className="help-faq-item">
                  <strong>{faq.q}</strong>
                  <p>
                    <i className="fa fa-circle" style={{ color: "green" }} />{" "}
                    {faq.a}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="contact-support">
        <h3>¿Todavía necesitás ayuda?</h3>
        <p>
          Si no encontraste lo que buscabas, podés contactarnos directamente.
        </p>
        <a href="/Contact" className="support-btn">
          Contactar soporte
        </a>
      </div>
    </div>
  );
};

export default HelpCenter;

import React from "react";

const Careers = () => {
  const jobs = [
    {
      title: "Asistente de preparación",
      location: "Asunción, Paraguay",
      type: "Tiempo completo",
      description:
        "Apoyo en la preparación de productos caseros con los más altos estándares de higiene y calidad.",
    },
    {
      title: "Atención al cliente",
      location: "Asunción, Paraguay",
      type: "Tiempo completo",
      description:
        "Atender consultas, pedidos y coordinar entregas de manera eficiente y amable.",
    },
    {
      title: "Repartidor / Repartidora",
      location: "Asunción, Paraguay",
      type: "Tiempo parcial",
      description:
        "Entrega oportuna de pedidos a domicilio en Asunción. Requiere movilidad propia.",
    },
    {
      title: "Community Manager",
      location: "Remoto",
      type: "Freelance",
      description:
        "Gestión de redes sociales, contenido y comunicación de la marca Antojo Casero.",
    },
  ];

  return (
    <div className="careers-container">
      <div className="row">
        <div className="col-md-12 mb-6">
          <div className="section-head text-center mt-8">
            <h1 className="h3style" style={{ color: "green" }} data-title="Sumate al equipo">
              Sumate al equipo
            </h1>
            <div className="wt-separator bg-primarys"></div>
            <div className="wt-separator2 bg-primarys"></div>
          </div>
        </div>
      </div>
      <p className="careers-intro">
        Somos Antojo Casero y buscamos personas apasionadas por la cocina y el buen trato.
        Si querés ser parte de nuestro equipo, mirá las posiciones disponibles.
      </p>

      <div className="job-list">
        <div className="row">
          {jobs.map((job, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="job-card">
                <h3 className="job-title">{job.title}</h3>
                <p className="job-info">
                  <strong>Ubicación:</strong> {job.location}
                </p>
                <p className="job-info">
                  <strong>Modalidad:</strong> {job.type}
                </p>
                <p className="job-desc">{job.description}</p>
                <button className="apply-btn">Postularme</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;

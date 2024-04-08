import React from "react";
import "./contacto.css";

function Contacto() {
  return (
    <section id="contact" className="contact contacto-container">
      <div className="container" data-aos="fade-up">
        <div className="section-title contacto">
          <h2>Contacto</h2>
          <p></p>
        </div>
        <div>
          <iframe
            style={{ border: 0, width: "100%", height: 270 }}
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.157858976438!2d-58.185869849237!3d-26.18244428340524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942c4d9c142b7f33%3A0x20308f4c3c618416!2sFormosa%2C%20Provincia%20de%20Formosa!5e0!3m2!1sen!2sar!4v1647432118053!5m2!1sen!2sar`}

            frameBorder={0}
            allowFullScreen
          ></iframe>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info info-contacto">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Dirección:</h4>
                <p> San Martín 500, Formosa, Argentina</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>honorableconcejodeliberantefsa@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;

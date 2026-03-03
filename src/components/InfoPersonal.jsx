import React from 'react'
import { perfil, datosPersonales } from '../data/infoPersonal'

function InfoPersonal() {
  return (
    <section className="about-section" data-aos="fade-up" id="about">
      <h1 className="main-name">Leandro Cruz</h1>
      <div className="title-container">
        <p className="main-title">ANALISTA PROGRAMADOR SSR</p>
      </div>
      
      <div className="divider"></div>

      <div className="about-content">
        <p className="about-description">{perfil.descripcion}</p>
      </div>

      <div className="about-info">
        <p className="info-item"><strong>Edad:</strong> {datosPersonales.find(d => d.label === 'Edad').valor}</p>
        <p className="info-item"><strong>Email:</strong> <a href={`mailto:${datosPersonales.find(d => d.label === 'Mail').valor}`}>{datosPersonales.find(d => d.label === 'Mail').valor}</a></p>
        <p className="info-item"><strong>Teléfono:</strong> {datosPersonales.find(d => d.label === 'Teléfono').valor}</p>
        <p className="info-item"><strong>Ubicación:</strong> {datosPersonales.find(d => d.label === 'Ubicación').valor}</p>
      </div>

      <div className="divider" style={{marginTop: '2rem'}}></div>

      <div className="contact-footer">
        <div className="contact-left">
          <p className="contact-text">¡Pongámonos en contacto!</p>
          <div className="social-links">
            <a className="social-link" href="mailto:leandrocruz2000@gmail.com" title="Email">
              <i className="fa fa-envelope"></i>
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/leandrocruz05/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
            <a className="social-link" href="https://github.com/leandrocruz05" title="GitHub" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i>
            </a>
            <a className="social-link" href="https://api.whatsapp.com/send?phone=541167425262&text=Hola%20Leandro!%20Nos%20contactamos%20por%20tu%20curriculum!" title="WhatsApp" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="cv-download">
          <p className="cv-text">Descarga o abre mi CV</p>
          <a className="social-link" href="./PDF/cv-leandro-cruz.pdf" title="Descargar CV" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-file-pdf-o"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default InfoPersonal

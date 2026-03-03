import React from 'react'
import { estudios } from '../data/estudios'
import { formaciones } from '../data/formaciones'

function Educacion({ abrirModal }) {
  return (
    <section className="education-section" data-aos="fade-up" id="education">
      <h2 className="section-title">Estudios</h2>
      <ul className="education-list">
        {estudios.map((estudio, index) => (
          <li className="education-item" key={index}>
            <h3 className="education-degree">{estudio.titulo}</h3>
            <a href="#" className="education-institution-link">
              <span className="education-institution">{estudio.institucion}</span>
            </a>
            <p className="education-dates">{estudio.periodo}</p>
            {index < estudios.length - 1 && <div className="divider"></div>}
          </li>
        ))}
      </ul>

      <h2 className="section-title" style={{marginTop: '3rem'}}>Formación</h2>
      <ul className="education-list formacion-grid">
        {formaciones.map((formacion, index) => (
          <li className="education-item formacion-item" key={index}>
            <h3 className="education-degree">{formacion.titulo}</h3>
            <span className="education-institution">{formacion.institucion}</span>
            {formacion.certificado && (
              <button 
                className="btn btn-certificate" 
                onClick={() => abrirModal(formacion.certificado)}
              >
                <i className="fa fa-file-text-o"></i> Ver Certificado
              </button>
            )}
            {index < formaciones.length - 1 && <div className="divider formacion-divider"></div>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Educacion

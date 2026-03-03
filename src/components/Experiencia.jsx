import React from 'react'
import { experiencias } from '../data/experiencias'

function Experiencia() {
  return (
    <section data-aos="fade-up" id="experience">
      <h2 className="section-title">Experiencia</h2>
      <ul className="experience-list">
        {experiencias.map((exp, index) => (
          <li className="experience-item" key={index}>
            <div className="experience-header">
              <h3 className="experience-job">{exp.titulo}</h3>
            </div>
            <a href="#" className="experience-company-link">
              <span className="experience-company">{exp.compania}</span>
            </a>
            {exp.descripcion && <p className="experience-desc">{exp.descripcion}</p>}
            {exp.items && (
              <ul className="experience-bullets">
                {exp.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {index < experiencias.length - 1 && <div className="divider"></div>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experiencia

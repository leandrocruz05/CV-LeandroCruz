import React from 'react'
import { experiencias } from '../data/experiencias'

function Experiencia() {
  return (
    <section data-aos="fade-up">
      <h2>Experiencia</h2>
      <div className="cards">
        {experiencias.map((exp, index) => (
          <div className="card" key={index}>
            <h3>{exp.titulo}</h3>
            <h4>{exp.compania}</h4>
            {exp.descripcion && <p>{exp.descripcion}</p>}
            {exp.items && (
              <div className="items">
                {exp.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experiencia

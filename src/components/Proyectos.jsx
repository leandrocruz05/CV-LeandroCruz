import React from 'react'
import { proyectos } from '../data/proyectos'

function Proyectos() {
  return (
    <section data-aos="fade-up">
      <h2>Proyectos</h2>
      <div className="cards">
        {proyectos.map((proyecto, index) => (
          <div className="card" key={index}>
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            {index === 3 && <br />}
            <a href={proyecto.link} className="btn" target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Proyectos

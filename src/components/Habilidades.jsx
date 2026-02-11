import React from 'react'
import { habilidades } from '../data/habilidades'

function Habilidades() {
  return (
    <section data-aos="fade-up">
      <h2>Habilidades</h2>
      <div className="skills">
        {habilidades.map((habilidad, index) => (
          <span className="skill" key={index}>{habilidad}</span>
        ))}
      </div>
    </section>
  )
}

export default Habilidades

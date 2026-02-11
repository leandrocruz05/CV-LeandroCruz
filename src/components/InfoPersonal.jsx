import React from 'react'
import { perfil, datosPersonales } from '../data/infoPersonal'

function InfoPersonal() {
  return (
    <section className="informacion-personal" data-aos="fade-up">
      <div className="perfil">
        <h2>Perfil</h2>
        <p>{perfil.descripcion}</p>
      </div>
      <div className="sobremi">
        <h2>Sobre mí</h2>
        <ul>
          {datosPersonales.map((dato, index) => (
            <li key={index}>
              <strong>{dato.label}: </strong>
              {dato.tipo === 'email' ? (
                <a href={`mailto:${dato.valor}`}>{dato.valor}</a>
              ) : (
                dato.valor
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default InfoPersonal

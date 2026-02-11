import React from 'react'
import { estudios } from '../data/estudios'
import { formaciones } from '../data/formaciones'

function Educacion({ abrirModal }) {
  return (
    <section className="estudios" data-aos="fade-up">
      <div className="estudio">
        <h2>Estudios</h2>
        <div className="cards">
          {estudios.map((estudio, index) => (
            <div className="card" key={index}>
              <h3>{estudio.titulo}</h3>
              <h4>{estudio.institucion}</h4>
              <p>{estudio.periodo}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="formacion">
        <h2>Formación</h2>
        <div className="cards">
          {formaciones.map((formacion, index) => (
            <div className="card" key={index}>
              <h3>{formacion.titulo}</h3>
              <p>{formacion.institucion}</p>
              {formacion.certificado && (
                <button 
                  className="btn ver-cert" 
                  onClick={() => abrirModal(formacion.certificado)}
                >
                  Ver Certificado
                </button>
              )}
              {formacion.certificado === null && <br />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Educacion

import React from 'react'

function Certificados({ imagenCertificado, modalAbierto, cerrarModal }) {
  if (!modalAbierto) {
    return null
  }

  function clickEnFondo(evento) {
    if (evento.target === evento.currentTarget) {
      cerrarModal()
    }
  }

  return (
    <div id="modalCert" className="modal" style={{ display: 'block' }} onClick={clickEnFondo}>
      <span className="cerrar" onClick={cerrarModal}>&times;</span>
      <img className="modal-content" id="imgModal" src={imagenCertificado} alt="Certificado" />
    </div>
  )
}

export default Certificados

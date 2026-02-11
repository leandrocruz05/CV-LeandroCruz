import React from 'react'

function Header({ cambiarModoOscuro }) {
  return (
    <header>
      <button id="modoOscuro" onClick={cambiarModoOscuro}>
        <i className="fa fa-moon"></i>
      </button>
      <h1>Leandro Cruz</h1>
      <p>Analista programador SSr</p>
      <a className="vers1" href="./version1/index.html">Ir a Versión 1</a>

      <div className="botones-redes">
        <a className="red-social" href="https://www.linkedin.com/in/leandrocruz05/" rel="tooltip">
          <i className="fa fa-linkedin"></i>
        </a>
        <a className="red-social"
          href="https://api.whatsapp.com/send?phone=541167425262&text=Hola%20Leandro!%20Nos%20contactamos%20por%20tu%20curriculum!"
          rel="tooltip">
          <i className="fa fa-whatsapp"></i>
        </a>
        <a className="red-social" href="https://www.instagram.com/lean.cruz/" rel="tooltip">
          <i className="fa fa-instagram"></i>
        </a>
        <a className="red-social" href="https://github.com/leandrocruz05" rel="tooltip">
          <i className="fa fa-github"></i>
        </a>
      </div>
    </header>
  )
}

export default Header

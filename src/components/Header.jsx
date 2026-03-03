import React from 'react'

function Header({ cambiarModoOscuro }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="nav-header">
      <nav className="main-nav">
        <button className="nav-btn" onClick={() => scrollToSection('about')}>Inicio</button>
        <button className="nav-btn" onClick={() => scrollToSection('experience')}>Experiencia</button>
        <button className="nav-btn" onClick={() => scrollToSection('skills')}>Habilidades</button>
        <button className="nav-btn" onClick={() => scrollToSection('projects')}>Proyectos</button>
        <button className="nav-btn" onClick={() => scrollToSection('education')}>Estudios</button>
        <button className="nav-btn" onClick={() => scrollToSection('versions')}>Versiones</button>
        <button className="nav-btn icon-btn" onClick={cambiarModoOscuro}>
          <i className="fa fa-sun-o"></i>
        </button>
      </nav>
    </header>
  )
}

export default Header

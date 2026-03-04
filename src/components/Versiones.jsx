import React from 'react'

function Versiones() {
  return (
    <section data-aos="fade-up" id="versions">
      <h2 className="section-title">Versiones</h2>
      <div className="versions-container">
        <div className="version-card">
          <h3 className="version-title">Versión 1.0</h3>
          <p className="version-description">
            Versión inicial del CV desarrollada con HTML, CSS y JavaScript vanilla. 
            Diseño original con animaciones AOS y Bootstrap.
          </p>
          <div className="version-tech-tags">
            <span className="tag" data-tech="HTML">
              <i className="fab fa-html5"></i> HTML
            </span>
            <span className="tag" data-tech="CSS">
              <i className="fab fa-css3-alt"></i> CSS
            </span>
            <span className="tag" data-tech="Javascript">
              <i className="fab fa-js-square"></i> JavaScript
            </span>
          </div>
          <div className="version-actions">
            <a href="/version1/index.html" className="btn" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-eye"></i> Ver Versión 1.0
            </a>
          </div>
        </div>
        
        <div className="version-card">
          <h3 className="version-title">Versión 2.0</h3>
          <p className="version-description">
            Migración a React JS y Vite con diseño basado en cards. 
            Componentes modulares y mejoras en la estructura.
          </p>
          <div className="version-tech-tags">
            <span className="tag" data-tech="React">
              <i className="fab fa-react"></i> React 18
            </span>
            <span className="tag" data-tech="Javascript">
              <i className="fab fa-js-square"></i> JavaScript
            </span>
            <span className="tag" data-tech="CSS">
              <i className="fab fa-css3-alt"></i> CSS3
            </span>
          </div>
          <div className="version-actions">
            <a href="/version2/index.html" className="btn" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-eye"></i> Ver Versión 2.0
            </a>
          </div>
        </div>
        
        <div className="version-card current">
          <h3 className="version-title">Versión 3.0 <span className="current-badge">Actual</span></h3>
          <p className="version-description">
            Versión actual con diseño minimalista sin cards, componentes reutilizables, 
            skills horizontales con iconos y colores específicos, y experiencia de usuario mejorada.
          </p>
          <div className="version-tech-tags">
            <span className="tag" data-tech="React">
              <i className="fab fa-react"></i> React 18
            </span>
            <span className="tag" data-tech="Javascript">
              <i className="fab fa-js-square"></i> JavaScript
            </span>
            <span className="tag" data-tech="CSS">
              <i className="fab fa-css3-alt"></i> CSS3
            </span>
          </div>
          <div className="version-actions">
            <button className="btn current-version" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <i className="fa fa-check-circle"></i> Estás aquí
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Versiones
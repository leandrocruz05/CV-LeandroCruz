import React from 'react'
import { proyectos } from '../data/proyectos'

function Proyectos() {
  const getIcon = (tech) => {
    const techLower = tech.toLowerCase()
    if (techLower.includes('react')) return 'fab fa-react'
    if (techLower.includes('javascript')) return 'fab fa-js-square'
    if (techLower.includes('firebase')) return 'fa fa-fire'
    if (techLower.includes('html')) return 'fab fa-html5'
    if (techLower.includes('css')) return 'fab fa-css3-alt'
    return 'fa fa-tag'
  }

  return (
    <section data-aos="fade-up" id="projects">
      <h2 className="section-title">Proyectos</h2>
      <ul className="project-list">
        {proyectos.map((proyecto, index) => (
          <li className="project-item" key={index}>
            <div className="project-header">
              <a href={proyecto.link} target="_blank" rel="noopener noreferrer" className="project-title-link">
                <h3 className="project-name">
                  {proyecto.titulo}
                  <i className="fa fa-link" style={{marginLeft: '0.5rem', fontSize: '0.9rem'}}></i>
                </h3>
              </a>
            </div>
            <p className="project-type">Personal Project - Coderhouse</p>
            <p className="project-desc">{proyecto.descripcion}</p>
            {proyecto.tecnologias && proyecto.tecnologias.length > 0 && (
              <div className="project-tech-tags">
                {proyecto.tecnologias.map((tech, i) => (
                  <span key={i} className="tag" data-tech={tech}>
                    <i className={getIcon(tech)}></i> {tech}
                  </span>
                ))}
              </div>
            )}
            <div className="project-actions">
              {proyecto.link && (
                <a href={proyecto.link} className="btn" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github"></i> GitHub
                </a>
              )}
              {proyecto.liveDemo && (
                <a href={proyecto.liveDemo} className="btn" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-external-link"></i> Live Demo
                </a>
              )}
            </div>
            {index < proyectos.length - 1 && <div className="divider"></div>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Proyectos

import React from 'react'
import { habilidades } from '../data/habilidades'

function Habilidades() {
  const getIcon = (skill) => {
    const skillLower = skill.toLowerCase()
    if (skillLower.includes('react')) return 'fab fa-react'
    if (skillLower.includes('html')) return 'fab fa-html5'
    if (skillLower.includes('css')) return 'fab fa-css3-alt'
    if (skillLower.includes('sass')) return 'fab fa-sass'
    if (skillLower.includes('node')) return 'fab fa-node-js'
    if (skillLower.includes('mongodb')) return 'fa fa-leaf'
    if (skillLower.includes('git') && !skillLower.includes('hub')) return 'fab fa-git-alt'
    if (skillLower.includes('github')) return 'fab fa-github'
    if (skillLower.includes('bitbucket')) return 'fab fa-bitbucket'
    if (skillLower.includes('firebase')) return 'fa fa-fire'
    if (skillLower.includes('jenkins')) return 'fa fa-cogs'
    if (skillLower.includes('jira')) return 'fa fa-ticket'
    if (skillLower.includes('postman')) return 'fa fa-paper-plane'
    if (skillLower.includes('sql') || skillLower.includes('sybase')) return 'fa fa-database'
    if (skillLower.includes('cobol')) return 'fa fa-code'
    if (skillLower.includes('figma')) return 'fa fa-pencil-ruler'
    if (skillLower.includes('control m')) return 'fa fa-tasks'
    if (skillLower.includes('4th dimension')) return 'fa fa-cube'
    return 'fa fa-tag'
  }

  const categorias = [
    { nombre: 'FRONTEND', items: habilidades.frontend },
    { nombre: 'BACKEND', items: habilidades.backend },
    { nombre: 'CLOUD', items: habilidades.cloud },
    { nombre: 'VERSIONADO', items: habilidades.versionControl },
    { nombre: 'HERRAMIENTAS', items: habilidades.herramientas }
  ]

  return (
    <section data-aos="fade-up" id="skills">
      <h2 className="section-title">Habilidades</h2>
      <ul className="skills-container">
        {categorias.map((categoria, index) => (
          <li className="skill-group" key={index}>
            <h3 className="skill-group-title">{categoria.nombre}</h3>
            <ul className="skill-tags">
              {categoria.items.map((skill, i) => (
                <li key={i} className="tag" data-tech={skill}>
                  <i className={getIcon(skill)}></i> {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Habilidades

import { useState } from 'react'
import Header from './components/Header'
import InfoPersonal from './components/InfoPersonal'
import Experiencia from './components/Experiencia'
import Educacion from './components/Educacion'
import Habilidades from './components/Habilidades'
import Proyectos from './components/Proyectos'
import Footer from './components/Footer'
import Certificados from './components/Certificados'
import './styles/App.css'

function App() {
  const [modoOscuro, setModoOscuro] = useState(false)
  const [imagenModal, setImagenModal] = useState(null)

  function cambiarModoOscuro() {
    setModoOscuro(!modoOscuro)
  }

  function abrirModal(imagenSrc) {
    setImagenModal(imagenSrc)
  }

  function cerrarModal() {
    setImagenModal(null)
  }

  return (
    <div className={modoOscuro ? 'dark' : ''}>
      <Header cambiarModoOscuro={cambiarModoOscuro} />
      
      <div className="container">
        <InfoPersonal />
        <Experiencia />
        <Educacion abrirModal={abrirModal} />
        <Habilidades />
        <Proyectos />
      </div>

      <Footer />
      
      <Certificados 
        imagenCertificado={imagenModal} 
        modalAbierto={imagenModal !== null} 
        cerrarModal={cerrarModal} 
      />
    </div>
  )
}

export default App

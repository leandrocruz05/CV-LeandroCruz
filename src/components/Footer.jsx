import React from 'react'

function Footer() {
  return (
    <footer data-aos="fade-up">
      <div className="footer-content">
        <p className="footer-text">¡Pongámonos en contacto!</p>
        <div className="footer-social-icons">
          <a className="footer-icon" href="mailto:leandrocruz2000@gmail.com" title="Email">
            <i className="fa fa-envelope"></i>
          </a>
          <a className="footer-icon" href="https://www.linkedin.com/in/leandrocruz05/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
          <a className="footer-icon" href="https://github.com/leandrocruz05" title="GitHub" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i>
          </a>
          <a className="footer-icon" href="https://api.whatsapp.com/send?phone=541167425262&text=Hola%20Leandro!%20Nos%20contactamos%20por%20tu%20curriculum!" title="WhatsApp" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import '../css/all.min.css'
import '../css/fontawesome.min.css'

function SFooter() {
  return (
    <footer>
      <div className="social-media">
              <a href="https://github.com/Projecto-Morix/Proyecto-Morix"><i className="fa-brands fa-github"></i></a>
              <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="/"><i className="fa-brands fa-instagram-square"></i></a>
            </div>


            <ul className="list-inline">
                <li className="list-inline-item"><a href="/">Inicio</a></li>
                <li className="list-inline-item"><a href="/">Ofertas</a></li>
                <li className="list-inline-item"><a href="/">Sobre Nosotros</a></li>
                <li className="list-inline-item"><a href="/">Contacto</a></li>
                <li className="list-inline-item"><a href="/">Politica de Privacidad</a></li>
            </ul>
            <p className="copyright">Proyecto Morix® 2022</p>
    </footer>
  )
}

export default SFooter
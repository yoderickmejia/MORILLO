import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {useUserContext} from './UserContext';
import {Axios} from '../backend';


const NavbarR = (props) => {
  const navigate= useNavigate();
  const [User, SetUser] = useState();
  console.log(props.user.Nombre)
  return (
    props.user !== undefined? (
      <nav>
        <div className='default-nav'>
          <Link to="/" className="nav-logo">Morix</Link>
          <div className='links'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/catalog">Catalogo</Link></li>
              <li><Link to="/add-event">Agregar evento</Link></li>
            </ul>
            <ul>
              <>
              <li><Link to="/user">Mi perfil ({props.user.Nombre})</Link></li>
              <li><Link to='/logout'>Log Out</Link> </li>
              </>
            </ul>
          </div>
        </div>
        <div className='responsive-nav'>
          <Link to="/" className="nav-logo">Morix</Link>
          <button className="nav-menu" onClick={responsiveMenuClick}><i className="fa-solid fa-bars"></i></button>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/add-event">Agregar evento</Link></li>
          </ul>
        </div>
      </nav>
    ): <h1>klk</h1>
    
  )

  function responsiveMenuClick() {
    document.querySelector('.responsive-nav > ul').classList.toggle('active')
  }
}
//SetUser({ auth: false, token: null,UserData:{}})
export default NavbarR
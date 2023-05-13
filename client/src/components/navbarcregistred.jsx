import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {useUserContext} from './UserContext';
import {Axios} from '../backend';


const NavbarR = () => {
  const navigate= useNavigate();
  const [User, SetUser] = useUserContext();
  localStorage.setItem("User", JSON.stringify(User))
  console.log(User)
  return (
    User.userData !== null? (
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
              <li><Link to="/user">Mi perfil ({User.userData.Nombre})</Link></li>
              <li><a onClick={e => {
                e.preventDefault()
                localStorage.clear()
                SetUser({userData: null, sponsorData: null})
                navigate('/')
              }}>Log Out</a></li>
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
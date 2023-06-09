import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {useUserContext} from './UserContext';
import {Axios} from './../backend';
const Navbarc = () => {
  const navigate= useNavigate();
  const [User, SetUser] = useUserContext();
  return (
    <nav>
      <div className='default-nav'>
        <Link to="/" className="nav-logo">Morix</Link>
        <div className='links'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Catalogo</Link></li>
          </ul>
          <ul>
            <>
            <li><Link to="/login">Log-in</Link></li>
            <li><Link to="/SignIn">Register</Link></li>
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
          <>
          <li><Link to="/login">Log-in</Link></li>
          <li><Link to="/SignIn">Register</Link></li>
          </>
        </ul>
      </div>
    </nav>
  )

  function responsiveMenuClick() {
    document.querySelector('.responsive-nav > ul').classList.toggle('active')
  }
}
//SetUser({ auth: false, token: null,UserData:{}})
export default Navbarc
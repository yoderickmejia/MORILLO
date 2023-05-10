import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import UserCSS from './../css/user.module.css';
import {useUserContext} from './../components/UserContext';
import Catalog from './../components/Catalog';
import { _session, _user } from '../components/LoginC';
function User() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    setUser(_user)
  }, [])

  console.log(user)
  return (
    <div className={UserCSS.user}>
      {user !== null? (
        <>
          {!user.IsPatrocinador == 0?(
            <section className={UserCSS.myEvents}>
              <h3 className={UserCSS.sectionTitle}>Mis eventos</h3>
              <Link to="/add-event" className={UserCSS.button}>Agregar Evento</Link>
              <Catalog inProfile={true} id={user.ID_Usuario} Title={'Tus Eventos'} />
            </section>
          ):(
            <section className={UserCSS.settings}>
              <h3 className={UserCSS.sectionTitle}>Ajustes</h3>
              <Link to="/register-prov" className={UserCSS.button}>Convertirse en patrocinador</Link>
            </section> 
          )}
          
        </>
      ): <h1>klk</h1>}
    

</div>
  )
}

export default User
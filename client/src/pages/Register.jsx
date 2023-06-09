import RegisterCSS from './../css/register.module.css';
import { Axios } from '../backend';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
function Register() {
  const [Nombre, SetNombre] = useState(() => { return '' });
  const [Apellido, SetApellido] = useState(() => { return '' });
  const [Email, SetEmail] = useState(() => { return '' });
  const [Pass, SetPass] = useState(() => { return '' });
  const [Telefono, SetTelefono] = useState(() => { return '' });
  const [Birth, SetBirth] = useState(() => { return new Date('1990-01-01')});
  const [Guide, SetGuide] = useState(() => { return { status: false, msg: 'You must be 18 years old to register', color: 'red' } });
  const navigate = useNavigate();
  const Register = async () => {
    if (Nombre === '' || Apellido === '' || Email === '' || Pass === '' || Telefono === '') {
      SetGuide({ status: false, msg: 'Please fill all the fields', style: { color: 'red' } });
      return;
    }
    const EmailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    if (!EmailRegex.test(Email)) {
      SetGuide({ status: false, msg: 'Please enter a valid email', style: { color: 'red' } });
      return;
    }
    // check if birth is older than 18 years
    if ((new Date(Date.now()).getFullYear() - Birth.getFullYear()) < 18) {
      SetGuide({ status: false, msg: 'You must be 18 years old to register', style: { color: 'red' } });
      return;
    }
    SetGuide({ status: true, msg: 'Registering...', style: { color: 'black' } });
    try {
      const user = {
        Nombre: Nombre, 
        Apellidos: Apellido, 
        Email: Email.toLowerCase(), 
        PasHash: Pass, 
        Telefono: Telefono, 
        Birth: Birth
      }
      
      const resp = await Axios.post('/users', { 
        nombre: Nombre, 
        apellidos: Apellido, 
        email: Email.toLowerCase(), 
        pasHash: Pass, 
        telefono: Telefono, 
        fechaNac: Birth.toISOString().substring(0,10), 
        imagen: null, 
        patrocinador: false 
      });
      if (resp.status === 200) {
        console.log('object');
        SetGuide({ status: true, msg: 'Register success', style: { color: 'green' } });
        navigate('/login');
      } else
        console.log('papa');
    } catch (err) {
      console.log('anja');
      SetGuide({ status: false, msg: err.response.data, style: { color: 'red' } });
    }
  }
  return (
    <div className="main-container">
      <main>
        <div className={RegisterCSS.register}>
          <div className={RegisterCSS.registerPanel}>
            <div className={RegisterCSS.registerHeader}>
              <div className={RegisterCSS.headerTitle}>Crea tu cuenta</div>
              <div className={RegisterCSS.headerSubtitle}>Y comienza la experiencia</div>
            </div>
            <form action=''>
              <label htmlFor="Nombre">Nombre</label>
              <input type="text" id="name" onChange={(e) => { SetNombre(e.target.value); }} value={Nombre} />
              <label htmlFor="Apellido" >Apellidos</label>
              <input type="text" id="apellido" onChange={(e) => { SetApellido(e.target.value); }} value={Apellido} />
              <label htmlFor="Email" >Email</label>
              <input type="email" id="email" onChange={(e) => { SetEmail(e.target.value); }} value={Email} />
              <label htmlFor="Password">Contraseña</label>
              <input type="password" onChange={(e) => { SetPass(e.target.value) }} value={Pass} />
              <label htmlFor="Telefono">Telefono</label>
              <input type="text" id="telefono" onChange={(e) => { SetTelefono(e.target.value) }} value={Telefono} />
              <label htmlFor="Birth">Fecha de Nacimiento</label>
              <input type="date" id="birth" onChange={(e) => {
                console.log(e.target.value); SetBirth(new Date(e.target.value));
              }} value={Birth.toISOString().substring(0,10)
              } />

              <input type="submit" onClick={event => {
                event.preventDefault()
                Register()
              }} value='Register' />
              <p style={Guide.style}>{Guide.msg}</p>
              <div className={RegisterCSS.headerSubtitle}><Link to='/signin'>Registrarse</Link></div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Register;

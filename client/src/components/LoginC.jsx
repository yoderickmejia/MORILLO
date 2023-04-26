import React, {useState, useEffect} from 'react'
import { getUserById } from '../functions/users.functions';
import { Axios } from '../backend';
import { useNavigate } from 'react-router-dom';

const LoginC = () => {
  const navigate = useNavigate();
  let id
  let user = []
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null)
  

  const Login = async () => {
    const resp = await Axios.post('/login', { 
      email: email, 
      password: password, 
    });
    if (resp.status === 200) {
      if(resp.data[0]['count(*)'] === 1){
        id = resp.data[0].ID_Usuario;
        getUserById(id, user)
        console.log(user)
        console.log('usuario encontrado con id: ' + id)
      }
      else{
        console.log('usuario no encontrado')
      }
    } else{
      console.log('papa');
    }
  }


  return (
    <div>
      <form action="">
        <label htmlFor="">Email</label>
        <input type="text" name="" id="" onChange={e => {setEmail(e.target.value)}}/>
        <label htmlFor="">Password</label>
        <input type="password" name="" onChange={e => {setPassword(e.target.value)}}/>
        <button onClick={e => {
          Login()
          e.preventDefault();
        }}>Iniciar Sesion</button>
      </form>
    </div>
  )
}

export default LoginC

//#region comentao
// import {Axios} from '../backend';
// import React ,{useState, useEffect} from 'react';
// import { useNavigate , Link, } from 'react-router-dom';
// import { useUserContext } from '../components/UserContext';
// function LoginC() {
//   const [id, setId] = useState(null);
//   const [email, setEmail] = useState(null);
//   const [password, setPassword] = useState(null);

//   const Login = () => {
//     useEffect(() => {
//       Login(email, password, id)
//     }, [])
//   }
    
// return (
//   <form action="">
//     <label htmlFor="email">E-Mail</label>
//     <input type="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='your@email.com'/>
//     <label htmlFor="password">Contraseña</label>
//     <input type="password" id='password' onChange={(e)=>{setPassword(e.target.value)}} />
  
//     <input type="submit" value="Iniciar Sesion" onClick={
//       (e) => {
//           e.preventDefault();
//           Login();
//       }
//     }/>
//     <p></p>
//     <Link to='/forgot'>Olvide mi contraseña</Link>
//     <Link to='/signin'>Registrarme</Link>
//   </form>)
// }
// export default LoginC;
/*const EmailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  if (!EmailRegex.test(Email)) {
    SetGuide({ status: false,msg:'Please enter a valid email', style: {color: 'red'}});
    return;
  }
  const PaswRegex = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm;
  if (!PaswRegex.test(Pass)) {
    SetGuide({ status: false,msg:'Please enter a valid password! It should contain 1 upper, 1 lower case letter and 1 number.', style: {color: 'red'}});
    return;
  }/ */

//#endregion
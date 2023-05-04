import React, {useState, useEffect} from 'react'
import { getUserById } from '../functions/users.functions';
import { Axios } from '../backend';
import { useNavigate } from 'react-router-dom';
import { conditionalrender } from './Render';


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
        conditionalrender.state = {Session: true};
        navigate('/');
        console.log(conditionalrender.state)
      }
      else{
        console.log('usuario no encontrado')
        conditionalrender.state.Session = false;
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

export default LoginC
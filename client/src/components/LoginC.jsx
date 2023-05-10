import React, {useState, useEffect} from 'react'
import { getUserById, Login } from '../functions/users.functions';
import { Axios } from '../backend';
import { useNavigate } from 'react-router-dom';

let _user
let _session

const LoginC = () => {
  const navigate = useNavigate();
  let id
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null)
  const [user, SetUser] = useState(null);
  const [session, setSession] = useState(null);
  const [response, setResponse] = useState(null);
  const [runLogin, setRunLogin] = useState(null);
  
  useEffect(() => {
    if (email !== null && password !== null && runLogin){
      Login(email, password, setResponse)
    }
    setRunLogin(false)
  }, [email, password, runLogin])
  
  useEffect(() => {
    if (response !== null){
      if (response.status === 200) {
        if(response.data[0]['count(*)'] === 1){
          id = response.data[0].ID_Usuario;
          getUserById(id, SetUser)
          setSession(true)
        }
      } else{
        console.log('papa');
      }
    }

  }, [response])

  useEffect(() => {
    if (user !== null){
      _user = user
      _session = session
      navigate('/')
    }
  }, [user, session])
  

  return (
    <div>
      <form action="">
        <label htmlFor="">Email</label>
        <input type="text" name="" id="" onChange={e => {setEmail(e.target.value)}}/>
        <label htmlFor="">Password</label>
        <input type="password" name="" onChange={e => {setPassword(e.target.value)}}/>
        <button onClick={e => {
          setRunLogin(true)
          e.preventDefault(); 
        }}>Iniciar Sesion</button>
      </form>
    </div>
  )
}

export default LoginC
export {_user, _session}
import React, {useState, useEffect, createContext} from 'react'
import { getUserById, Login } from '../functions/users.functions';
import { Axios } from '../backend';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';
import { getSponsorByUser } from '../functions/sponsors.functions';

const LoginC = () => {
  const navigate = useNavigate();
  let id
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null)
  const [user, SetUser] = useUserContext();
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
          getUserById(id, user, SetUser)
          setSession(true)
        }
      } else{
        console.log('error');
      }
    }

  }, [response])

  useEffect(() => {
    if (user.userData !== null){
      if (user.userData.IsPatrocinador == 1){
        getSponsorByUser(user.userData.ID_Usuario, user, SetUser)
      }
      else{
        console.log("no")
      }
      localStorage.setItem("User", JSON.stringify(user))
      navigate('/')
    }
  }, [user])
  
  
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
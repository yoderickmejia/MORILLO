import React, {useEffect, useState} from 'react'
import styles from '../css/provreg.module.css';
import { addSponsor } from '../functions/sponsors.functions';
import { getUserById } from '../functions/users.functions';
import { useUserContext } from '../components/UserContext';

function RegisterProv  () {
  const [category, setCategory] = useState(null);
  const [enterprise, setEnterprise] = useState(null);
  const [password, setPassword] = useState(null);
  const [cedula, setCedula] = useState(null);
  const [location, setLocation] = useState(null);
  const [check, setCheck] = useState(null);
  const [text, setText] = useState(null);
  const [user, setUser] = useUserContext();

  return (
    <div className={styles.registerProv}>
      <div class={styles.formRegister}>
        <h4>Formulario Registro</h4>
        
        <select id="Category" name="Categoria" class={styles.controls} onChange={e => {setEnterprise(e.target.value)}} >
          <option value="RealPerson">Individuo</option>
          <option value="Enterprise">Empresa</option>
        </select>
        <br/>
        <input class={styles.controls} type="text" name="Empresa" 
          id="Empresa" placeholder="Ingrese de Empresa" onChange={e => {setEnterprise(e.target.value)}} />

        <input class={styles.controls} type="password" name="correo" 
          id="correo" placeholder="Ingrese su Contraseña" onChange={e => {setPassword(e.target.value)}} />

        <input id="cedula"type="number" placeholder="000-00000000-0" class={styles.controls} 
          onChange={e => {setCedula(e.target.value)}} />

        <input type="text" placeholder="Ubicacion" class="controls" onChange={e => setLocation(e.target.value)}/>
        <input type="checkbox" name="Check" value="Si" placeholder="si" onChange={e => setCheck(e.target.value)} />
        <label for="Check" class="controls">Si</label>
        <p>Estoy de acuerdo con Terminos y Condiciones</p>
        <input class={styles.botons} type="submit" value="Registrar" onClick={e => {
          e.preventDefault();
          if (password === user.userData.PasHash){
            if(addSponsor(
              {
                idUsuario: user.userData.ID_Usuario,
                cedula: cedula,
                ubicacion: location
              }, user, setUser
            )){ 
              console.log('ya')
            }
          }
          else{
            console.log('password dont match')
          }
        }} />
      </div>
    </div>
  )
}

export default RegisterProv

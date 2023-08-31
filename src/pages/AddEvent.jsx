import React, { useState } from 'react'
import AddEventCSS from './../css/addevent.module.css';
import { Axios, Server } from '../backend';   
import ReactDOM from 'react-dom';
import { useUserContext } from '../components/UserContext';

function AddEvent() {
    const [name, setName] = useState(() => (""));
    const [type, setType] = useState(() => (""));
    const [location, setLocation] = useState(() => (""));
    const [date, setDate] = useState(() => (""));
    const [minAge, setMinAge] = useState(() => (""));
    const [description, setDescription] = useState(() => (""));
    const [user, setUser] = useUserContext()
    let img = '';
    let images = [];
    
    const AddEvent = async () => {
        if (date === null){
            date = new Date().toISOString().substring(0, 10)
        }

        const response = await Axios.post('/add-event', {
            nombre: name,
            tipo: type,
            locacion: location,
            fecha: date,
            edadMin: minAge,
            descripcion: description,
            imagenes: JSON.stringify(images),
            idPatrocinador: user.sponsorData.ID_Patrocinador
        })

        if (response.status === 200){
            console.log("si")
        }
        else{
            console.log(response.statusText)
        }
    }

    return (
        <form action="http://localhost:80/api/images/" id="form" method='POST' encType='multipart/form-data'>
            <img src="" id='imagen' alt="" />
            <div className={AddEventCSS.productDetails}>
            <div className={AddEventCSS.eventContainer}>
            <div className={AddEventCSS.imgContainer}>
                <input className={AddEventCSS.imgInput} id='imgs' name='image' type='file' onChange={(e) => {
                    images.push(e.target.value)
                    //console.log(document.getElementById("imgs").files)
                    let arr = []
                    arr = document.getElementById("imgs").files
                    let image = [] 
                    for (let i = 0; i < arr.length; i++){
                        image.push(arr[i])
                        console.log(image[i])
                    }

                    // images.map(i => {
                    //     console.log(i)
                    // })
                    const formData = new FormData(document.querySelector("#form"));
                }}></input>
            </div>
            <div className={AddEventCSS.text}>
                <input className={AddEventCSS.title} placeholder='Titulo del evento' onChange={(e) => {setName(e.target.value)}}></input>
                <div className={AddEventCSS.line}></div>
                <input className={AddEventCSS.category} placeholder='Categoria' onChange={(e) => {setType(e.target.value)}}></input>
                <input className={AddEventCSS.desc} placeholder='Descripcion' onChange={(e) => {setDescription(e.target.value)}}></input>
                <div className={AddEventCSS.localizaciondatos}>
                    <div className={AddEventCSS.localizacion}>
                        <div className={AddEventCSS.titleLocalizacion}>Localización</div>
                        <input className={AddEventCSS.textcontains} placeholder='Locacion' onChange={(e) => {setLocation(e.target.value)}}></input>
                    </div>
                    <div className={AddEventCSS.datosgenerales}>
                        <div className={AddEventCSS.titleDatos}>Datos Generales</div>
                        <div className={AddEventCSS.textcontains}>Fecha: <input className={AddEventCSS.Fecha} type='date' defaultValue={"1990-01-01"}
                        onChange={(e) => {setDate(e.target.value)}}></input></div>
                        <div className={AddEventCSS.textcontains}>Edad Mínima: <input className={AddEventCSS.EdadMinima} placeholder='00' onChange={(e) => {setMinAge(e.target.value)}}></input> años</div>
                    </div>
                </div>
                    <button className={AddEventCSS.boton} onClick={e => {
                        AddEvent()
                    }}>GUARDAR EVENTO</button>
                </div>
            </div>
        </div>
        </form>
        
    )
}

export default AddEvent
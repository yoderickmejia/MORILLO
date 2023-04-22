import React, { useState } from 'react'
import AddEventCSS from './../css/addevent.module.css';
import { Axios, Server } from '../backend';

function AddEvent() {
    const [name, setName] = useState(() => (""));
    const [type, setType] = useState(() => (""));
    const [location, setLocation] = useState(() => (""));
    const [date, setDate] = useState(() => (""));
    const [minAge, setMinAge] = useState(() => (""));
    const [description, setDescription] = useState(() => (""));
    
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
            descripcion: description
        })


        if (response.status === 200){
            console.log("si")
        }
        else{
            console.log(response.statusText)
        }
    }

    return (
        <div className={AddEventCSS.productDetails}>
            <div className={AddEventCSS.eventContainer}>
            <div className={AddEventCSS.imgContainer}>
                <input className={AddEventCSS.imgInput} type='file'></input>
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
                        <div className={AddEventCSS.textcontains}>Fecha: <input className={AddEventCSS.Fecha} placeholder='yyyy/mm/dd' 
                        onChange={(e) => {setDate(e.target.value)}}></input></div>
                        <div className={AddEventCSS.textcontains}>Edad Mínima: <input className={AddEventCSS.EdadMinima} placeholder='00' onChange={(e) => {setMinAge(e.target.value)}}></input> años</div>
                    </div>
                </div>
                    <button className={AddEventCSS.boton} onClick={e => {
                        e.preventDefault();
                        AddEvent()
                    }}>GUARDAR EVENTO</button>
                </div>
            </div>
        </div>
    )
}

export default AddEvent
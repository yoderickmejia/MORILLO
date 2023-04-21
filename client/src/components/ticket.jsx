import React from 'react'

const Ticket = (props) => {
  return (
    <div className='ticket'>
        <h1>{props.title}</h1>
        <img src={props.img} alt="" />
        <p>Descripcion: {props.description}</p>
        <p>Ubicacion: {props.location}</p>
        <p>Edad minima: {props.minAge}</p>
        <p>Fecha: {props.date}</p>
    </div>
  )
}

export default Ticket
import React from 'react'
import { Link } from 'react-router-dom'

const Ticket = (props) => {
  return (
    <Link to={`/catalog/${props.id}`}>
      <div className='ticket'>
        <h1>{props.title}</h1>
        <img src={props.img} alt="" />
        <p>Descripcion: {props.description}</p>
        <p>Ubicacion: {props.location}</p>
        <p>Edad minima: {props.minAge}</p>
        <p>Fecha: {props.date}</p>
      </div>
    </Link>
    
  )
}

export default Ticket
import React from 'react'
import { Link } from 'react-router-dom'
import CatalogCSS from '../css/Catalog.module.css'

const Ticket = (props) => {
  return (
    <Link to={`/catalog/${props.id}`} className={CatalogCSS.card}>
      <div className={CatalogCSS.cardContent}>
        <h1 className={CatalogCSS.catalogTitle}>{props.title}</h1>
        <img className = {CatalogCSS.img} src='' alt="" />
        <div>
          <p>Descripcion: {props.description}</p>
          <p>Ubicacion: {props.location}</p>
          <p>Edad minima: {props.minAge}</p>
          <p>Fecha: {props.date}</p>
        </div>
      </div>
    </Link>
    
  )
}

export default Ticket
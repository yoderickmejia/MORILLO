import { Axios } from '../backend';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getEvents } from '../functions/catalog.functions';

const Catalog = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    getEvents(setEvents);
  }, [])
  return (
    <>
      {events.map(events => {
        <div>
          <p>{`${events.Nombre}`}</p>
          <p>{`${events.Tipo}`}</p>
          <p>{`${events.ID_Patrocinador}`}</p>
          <p>{`${events.Locacion}`}</p>
          <p>{`${events.Fecha_Evento}`}</p>
          <p>{`${events.Edad_Min}`}</p>
          <p>{`${events.Descripcion}`}</p>
          <img src={events.Imagenes[0]} alt="" />
        </div>
      })}
    </>
  )
}

export default Catalog
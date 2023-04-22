import { Axios } from '../backend';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getEvents } from '../functions/catalog.functions';
import Ticket from './ticket';

const Catalog = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    getEvents(setEvents);
  }, [])
  
  return (
    <div className='catalog-container'>
      {events !== null? (
        events.map(events => (
          <Ticket 
            id={events.ID_Evento}
            img={events.Imagenes}
            date={events.Fecha_Evento}
            location={events.Locacion}
            minAge={events.Edad_Min}
            descripion={events.Descripcion}
            title={events.Nombre}
          />
      ))
      ) : console.log("events is null")}
    </div>
  )
}

export default Catalog
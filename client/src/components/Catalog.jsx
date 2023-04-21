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
    <div className='catalog'>
      {events !== null? (
        events.map(events => (
          <Ticket 
            img={events.Imagenes[0]}
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
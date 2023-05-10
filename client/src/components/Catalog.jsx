import { Axios } from '../backend';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getEvents } from '../functions/catalog.functions';
import Ticket from './ticket';
import CatalogCSS from '../css/Catalog.module.css'
import { getEventsBySponsor } from '../functions/sponsors.functions';

const Catalog = (props) => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    if (props.inProfile === true){
      getEventsBySponsor(props.id, setEvents)
    }
    else{
      getEvents(setEvents);
    }
  }, [])

  
  return (
    <div className={CatalogCSS.catalog}>
      <h1 className={CatalogCSS.catalogTitle}>Catalogo</h1>
      <div className={CatalogCSS.catalogContainer}>
        {events !== null? (
          events.map(events => (
            <Ticket 
              id={events.ID_Evento}
              //img={'../assets/images/' + events.ID_Evento + '.png'}
              date={(events.Fecha_Evento).substring(0, 10)}
              location={events.Locacion}
              minAge={events.Edad_Min}
              descripion={events.Descripcion}
              title={events.Nombre}
            />
        ))
        ) : console.log("events is null")}
      </div>
    </div>
  )
}

export default Catalog
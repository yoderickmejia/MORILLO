import {React, useState, useEffect} from 'react'
import {Server, ServerImg} from '../backend';
import {useParams} from 'react-router-dom';
import DetailsCSS from '../css/productdetail.module.css';
import Ticket from '../components/ticket';
import { getSingleEvent } from '../functions/catalog.functions';

function Details(props){
    const params = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
      getSingleEvent(params.id, setEvent)
    })

    return(
      <>
        {event !== null ? (
          <Ticket 
            id={event.ID_Evento}
            img={event.Imagenes}
            date={event.Fecha_Evento}
            location={event.Locacion}
            minAge={event.Edad_Min}
            descripion={event.Descripcion}
            title={event.Nombre}
        />
        ) : console.log("no")}
      </>
    )
}

export default Details;
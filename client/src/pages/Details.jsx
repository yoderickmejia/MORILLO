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
          <div className={DetailsCSS.eventContainer} key={event.ID_Evento}>
          <div className={DetailsCSS.img} /*style={{backgroundImage: 'url('+ServerImg+event.Imagenes+')'}}*/ />
          <div className={DetailsCSS.text}>
            <div className={DetailsCSS.title}>{event.Nombre}</div>
            <div className={DetailsCSS.line} />
            <div className={DetailsCSS.category}>{event.Tipo}</div>
            <div className={DetailsCSS.desc}>{event.Descripcion}</div>
            <div className={DetailsCSS.localizaciondatos}>
              <div className={DetailsCSS.localizacion}>
                <div className={DetailsCSS.titleLocalizacion}>Localización</div>
                <div className={DetailsCSS.textcontains}>República Dominicana</div>
                <div className={DetailsCSS.textcontains}>{event.locacion}</div>
                <div className={DetailsCSS.textcontains}>{event.locacion}</div>
              </div>
              <div className={DetailsCSS.datosgenerales}>
                <div className={DetailsCSS.titleDatos}>Datos Generales</div>
                <div className={DetailsCSS.textcontains}>Fecha:{event.Fecha_Evento}</div>
                <div className={DetailsCSS.textcontains}>Edad Mínima: {event.Edad_Min} años</div>
              </div>
            </div>
            <button className={DetailsCSS.boton}>COMPRA BOLETAS</button>
          </div>
        </div>
        ) : console.log("no")}
      </>
    )
}

export default Details;
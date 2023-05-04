import { Axios } from '../backend';

const getEvents = async (state) => {
    const request = await Axios.get("/events");
    state(request.data)
}

const getSingleEvent = async (id, state) => {
    const request = await Axios.get('/events/' + id)
    state(request.data[0])
} 

export {getEvents, getSingleEvent}
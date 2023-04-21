import { Server, Axios } from '../backend';
import axios from 'axios';
const getEvents = async (state) => {
    const request = await axios.get(Server + "/events");
    state(request.data)
    console.log(request.data)
}

export {getEvents}
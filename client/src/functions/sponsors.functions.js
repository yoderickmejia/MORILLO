import { Axios } from "../backend";

const getEventsBySponsor = async (id, state) => {
    const request = await Axios.get('/sponsor/' + id + '/events')
    state(request.data)
}

export {getEventsBySponsor}
import { Axios } from "../backend";
import { _user } from "../components/LoginC";

const getEventsBySponsor = async (id, state) => {
    const request = await Axios.get('/sponsor/' + id + '/events')
    state(request.data)
}

const addSponsor = async (body, user) => {
    console.log(body)
    let request = await Axios.post('/sponsor', body);
    if (request.status === 200){
        console.log('new sponsor')
    }
    request = await Axios.put('/users/' + user.ID_Usuario, {patrocinador: true})
    if (request.status === 200){
        console.log('user updated')
    }
}

export {getEventsBySponsor, addSponsor}
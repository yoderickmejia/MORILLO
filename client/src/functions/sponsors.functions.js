import { Axios } from "../backend";
import { useUserContext } from "../components/UserContext";
import { getUserById } from "./users.functions";

const getEventsBySponsor = async (id, state) => {
    const request = await Axios.get('/sponsor/' + id + '/events')
    state(request.data)
}

const getSponsorByUser = async (id, state, setState) => {
    const request = await Axios.get('/sponsor/user/' + id);
    let data = {userData: state.userData, sponsorData: request.data[0]}
    setState(data)
}

const addSponsor = async (body, user, state) => {
    let added = [false, false];
    let request = await Axios.post('/sponsor', body);
    if (request.status === 200){
        added[0] = true
    }
    request = await Axios.put('/users/' + user.userData.ID_Usuario, {patrocinador: true})
    if (request.status === 200){
        getUserById(user.userData.ID_Usuario, user, state)
        getSponsorByUser(user.userData.ID_Usuario, user, state)
        added[1] = true
    }
    return (added[0] === true && added[1] === true)
}


export {getEventsBySponsor, addSponsor, getSponsorByUser}
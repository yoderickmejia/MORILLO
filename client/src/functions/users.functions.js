import { Axios } from "../backend";


const Login = async (email, password, state) => {
    const request = await Axios.post("/login", {email: email, password: password});
    state(request.data);
    console.log(request.data);
}

const getUserById = async (id, user) => {
    const request = await Axios.get('/users/' + id);
    user[0] = request.data[0];
    
}

export {Login, getUserById}
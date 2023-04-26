import { Axios } from "../backend";
//const knex = require('knex')

const Login = async (email, password, state) => {
    const request = await Axios.post("/login", {email: email, password: password});
    state(request.data);
    console.log(request.data);
}

// const getUserById = (id, state) => {
//     state (
//         knex('Usuarios').where(
//             {ID_Usuario: id}
//         ).select
//     )
// }

export {Login}
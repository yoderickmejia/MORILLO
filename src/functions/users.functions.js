import { Axios } from "../backend";
import { createContext } from "react";
import { getSponsorByUser } from "./sponsors.functions";


const Login = async (email, password, state) => {
    const request = await Axios.post("/login", {email: email, password: password});
    state(request);
    console.log(request.data);
}

const getUserById = async (id, user, state) => {
    const request = await Axios.get('/users/' + id);
    let data
    if (user.IsPatrocinador !== true){
        console.log("patro")
        data = {userData: request.data[0], sponsorData: user.sponsorData};
        state(data)
    }
    else{
        data = {userData: request.data[0]};
        state(data)
    }
}

export {Login, getUserById}
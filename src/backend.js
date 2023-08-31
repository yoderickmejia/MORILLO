import axios from 'axios';
const Base = 'http://localhost';
export const Server = Base+'/api';
export const ServerImg = Base+'/img/';
export const Axios = axios.create({
    baseURL: Server
}); 
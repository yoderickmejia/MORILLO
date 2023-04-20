import axios from 'axios';
const Base = 'http://localhost';
export const Server = Base+'/api/v1';
export const ServerImg = Base+'/img/';
export const Axios = axios.create({
    baseURL: Server,
    timeout: 10000,
}); 
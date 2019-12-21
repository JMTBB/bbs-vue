import axios from 'axios';

let bases = '/proxy';


export const login = params => {return axios.post(`${bases}/login`, params).then(res => res.data);}
export const getUser = params => { return axios.get(`${bases}/user/${params}`).then(res => res.data);}
export const updateUser = (id,params) => { return axios.put(`${bases}/user/${id}`,params).then(res => res.data);}
export const register = params => {return axios.post(`${bases}/user`, params).then(res => res.data);}





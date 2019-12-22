import axios from 'axios';

let bases = '/proxy';

//登录注册
export const login = params => {return axios.post(`${bases}/login`, params).then(res => res.data);}
export const getUser = params => { return axios.get(`${bases}/user/${params}`).then(res => res.data);}
export const updateUser = (id,params) => { return axios.put(`${bases}/user/${id}`,params).then(res => res.data);}
export const register = params => {return axios.post(`${bases}/user`, params).then(res => res.data);}

//帖子部分

export const addPost = params => { return axios.post(`${bases}/post`, params).then(res => res.data); }
export const getPostByTime = params => { return axios.get(`${bases}/postAllbytime`,params).then(res => res.data);}
export const getPostById = params => { return axios.get(`${bases}/post/${params}`).then(res => res.data);}


//评论部分
export const addComment = params => { return axios.post(`${bases}/comment`, params).then(res => res.data); }
export const getCommentById = params => { return axios.get(`${bases}/comment/${params}`).then(res => res.data);}

//标签部分
export const addTag =  params => { return axios.post(`${bases}/PostTag`, params).then(res => res.data);}
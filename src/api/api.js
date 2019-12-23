import axios from 'axios';

let bases = '/proxy';

//登录注册
export const login = params => {return axios.post(`${bases}/login`, params).then(res => res.data);}
export const getUser = params => { return axios.get(`${bases}/user/${params}`).then(res => res.data);}
export const updateUser = (id,params) => { return axios.put(`${bases}/user/${id}`,params).then(res => res.data);}
export const register = params => {return axios.post(`${bases}/user`, params).then(res => res.data);}
export const getUsernameById = params => {return axios.get(`${bases}/user/${params}`).then(res => res.data.data.username);}

//帖子部分

export const addPost = params => { return axios.post(`${bases}/post`, params).then(res => res.data); }
export const getPostByTime = params => { return axios.get(`${bases}/postAllbytime`,params).then(res => res.data);}
export const getPostById = params => { return axios.get(`${bases}/post/${params}`).then(res => res.data);}
export const deleteById = params => {return axios.delete(`${bases}/post/${params}`).then(res => res.data); }
export const updatePost = (id,params) => {return axios.put(`${bases}/post/${id}`, params).then(res => res.data); }

export const putTop = params => { return axios.put(`${bases}/posttop/${params}`).then(res => res.data);}
export const putHigh = params => { return axios.put(`${bases}/posthigh/${params}`).then(res => res.data);}
export const addView = params => { return axios.put(`${bases}/postview/${params}`).then(res => res.data);}

export const searchPost = params => { return axios.get(`${bases}/posttitle/${params}`).then(res => res.data);}



//评论部分
export const addComment = params => { return axios.post(`${bases}/comment`, params).then(res => res.data); }
export const getCommentById = params => { return axios.get(`${bases}/comment/${params}`).then(res => res.data);}

//标签部分
export const addTag =  params => { return axios.post(`${bases}/PostTag`, params).then(res => res.data);}
export const getTagById = params => {return axios.get(`${bases}/PostTag/${params}`).then(res => res.data);}
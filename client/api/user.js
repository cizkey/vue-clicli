import axios from 'axios'
import {isDev, API_LINK} from 'public/js/util'

const request = axios.create({
  baseURL: API_LINK
})

// 用户登录
export function login({name, pwd}) {
  return axios.post('/user/login', {name, pwd})
}

// 获取用户列表
export function getUsers(level, page, pageSize) {
  return request.get(`/users?level=${level}&page=${page}&pageSize=${pageSize}`)
}


export function getUser(uname, uid) {
  return request.get('/user', {
    params: {
      uname,
      uid
    }
  })
}


// 用户退出
export function logout() {
  return axios.post('/user/logout')
}

export function auth() {
  return axios.get('/auth')
}
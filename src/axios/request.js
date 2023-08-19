import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})

// 请求拦截器
// 发送请求前,加载一些组件
// 某一些请求需要携带token,如果没有携带token,直接跳转到登录页面
instance.interceptors.request.use(config => {
    console.log('被拦截做一些操作')
    return config
}, err => {
    return err
})

// 响应拦截器
instance.interceptors.response.use(res => {
    return res
}, err => {
    if (err && err.response) {
        // 根据报错的状态码进行不同错误的抛出或者捕捉或者提示
        switch (err.response.status) {
            case 400:
                console.log('请求错误')
                break
            case 401:
                console.log('未认证')
                break
            default:
                throw new Error(err.respMsg)
        }
    }
})

export default instance
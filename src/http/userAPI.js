import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

// export const checkUsers = async () => {
//     const {data} = await $authHost.get('api/user/users' )
//     localStorage.setItem('user', data.user)
//     return jwt_decode(data.user)
// }

export const checkUser = async () => {
    const {data} = await $authHost.get('api/user/users')
    localStorage.setItem('user', data.user)
    return data
}

export const getOneUser = async (id) => {
    const {data} = await $host.get('api/user/user/' + id)
    localStorage.setItem('user', data.user)
    return data
}

// export const fetchUsers = async () => {
//     const {data} = await $host.get('api/user/users', )
//     return data
// }

// export const users = async () => {
//     const {data} = await $authHost.get('api/user/users' )
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }




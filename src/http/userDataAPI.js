import {$authHost, $host} from "./index";


export const userData = async (id) => {
    const {data} = await $authHost.get('api/userdata/' + id )
    // localStorage.setItem('userdata', data.userdata)
    return (data)
}


// export const getOneUser = async (id) => {
//     const {data} = await $host.get('api/user/user/' + id)
//     localStorage.setItem('user', data.user)
//     return data
// }





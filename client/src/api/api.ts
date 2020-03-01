import axios, { AxiosPromise } from 'axios';

const api = axios.create({
    baseURL:'http://localhost:3333/api/'
})
export const getUsers = ():AxiosPromise =>{
    return api.get('user/read')
}

interface IcreateUser{
    name:string,
    surname:string,
    birthday:string,
    sex:string,
    country:string,
    state:string,
    adress:string
};
export const createUser = (data:IcreateUser):AxiosPromise => {
    return api.post('user/create',{ data })
}


export const postComment = (id:string,comment:string):AxiosPromise =>{
    return api.post('user/comment',{
        id,
        comment
    })
}

export const deleteUser = (id:string):AxiosPromise =>{
    return api.delete('user/delete',{
        data:{id}
    })
}


interface IupdateUser{
    birthday:string,
    sex:string,
    country:string,
    state:string,
    adress:string
};

export const updateUser = (data:IupdateUser):AxiosPromise => {
    return api.put('user/update',{data})
}
import { DispatchWithoutAction } from "react";
import {getUsers,createUser,updateUser,deleteUser} from '../../api/api';
import { Dispatch } from "redux";

const GET_USERS = "GET_USER";
const CREATE_USER = "CREATE_USER";
const DELETE_USER = "DELETE_USER";
const EDITE_USER = "EDITE_USER";
const SET_CURRENT_USER = "SET_CURRENT_USER";

interface Iaction {
    type:string,
    data:object
}




export const userReducer = (state={},action:Iaction) => {
    switch (action.type) {
        case GET_USERS:{
            const users = action.data
            return {...state,users}
        }
        case DELETE_USER:{
            const users = action.data
            return {...state,users}
        }
        case SET_CURRENT_USER:
            const currentUser = action.data
            return {...state,currentUser};
        
        case CREATE_USER:
            const users = JSON.parse(JSON.stringify(state))
            users.users.push(action.data)
            return users


        default:
            return state;
    }
}


const getUsersAC = (users:any) => ({type:GET_USERS,data:users});
const createUserAC = (user:any) => ({type:CREATE_USER,data:user});
const  deleteUserAC = (users:any) => ({type:DELETE_USER,data:users});
const editeUserAC = (user:any) => ({type:EDITE_USER,data:user});
export const setCurrentUserAC = (user:any) => ({type:SET_CURRENT_USER,data:user})


export const deleteUserThunk = (id:string) => async (dispatch:Dispatch) => {
    const response = await deleteUser(id);
    response.data.success && dispatch(deleteUserAC(response.data.users));

    response.data.success&& dispatch(setCurrentUserAC(response.data.users[0]));


}

export const createUserThunk = (user:any) => async (dispatch:Dispatch) => {
    const response = await createUser(user);
    response.data.success && dispatch(createUserAC(response.data.user))
    response.data.success && dispatch(setCurrentUserAC(response.data.user));

}


export const getUsersThunk = () => async (dispatch:Dispatch) => {
    const users = await getUsers();
    dispatch(setCurrentUserAC(users.data.users[0]));

    dispatch(getUsersAC(users.data.users));
}

export const editUserThunk = (data:any) =>async (dispatch:Dispatch) => {
    const response = await updateUser(data);
    response.data.success && dispatch(setCurrentUserAC(response.data.user))
}
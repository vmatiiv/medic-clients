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
        case GET_USERS:
            const users = action.data
            return {...state,users}

        case SET_CURRENT_USER:
            const currentUser = action.data
            return {...state,currentUser};
        default:

            return state;
    }
}


const getUsersAC = (users:any) => ({type:GET_USERS,data:users});
const createUserAC = () => ({type:CREATE_USER});
const deleteUserAC = () => ({type:DELETE_USER});
const editeUserAC = () => ({type:EDITE_USER});
export const setCurrentUserAC = (user:any) => ({type:SET_CURRENT_USER,data:user})

export const getUsersThunk = () => async (dispatch:Dispatch) => {
    const users = await getUsers();
    dispatch(getUsersAC(users.data.users));
}


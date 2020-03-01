import { DispatchWithoutAction } from "react";
import {getUsers,createUser,updateUser,deleteUser} from '../../api/api'
const GET_USERS = "GET_USER";
const CREATE_USER = "CREATE_USER";
const DELETE_USER = "DELETE_USER";
const EDITE_USER = "EDITE_USER";

interface Iaction {
    type:string,
    data:object
}

export const userReducer = (state={},action:Iaction) => {
    switch (action.type) {
        case GET_USERS:
            console.log(action.data);
            break;
    
        default:
            break;
    }
}


const getUsersAC = (users:object) => ({type:GET_USERS,data:users});
const createUserAC = () => ({type:CREATE_USER});
const deleteUserAC = () => ({type:DELETE_USER});
const editeUserAC = () => ({type:EDITE_USER});



const getUsersThunk = () => async (dispatch:DispatchWithoutAction) => {
    const users = await getUsers();
    console.log(users);
    // dispatch(getUsersAC(users));
}


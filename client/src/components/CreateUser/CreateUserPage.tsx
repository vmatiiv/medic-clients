import React from 'react'
import { connect } from 'react-redux'
import {createUserThunk} from '../../redux/reducers/user'
import UserForm from './UserForm'


function CreateUserPage(props:any) {

    const handleSubmit = (formData:any) => {
        props.createUserThunk(formData);
    }
    return (
        <div>
            <UserForm onSubmit={handleSubmit}/>
            
        </div>
    )
}



export default connect(null,{createUserThunk})(CreateUserPage)

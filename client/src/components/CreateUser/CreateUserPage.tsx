import React, { useState } from 'react'
import { connect } from 'react-redux'
import {createUserThunk} from '../../redux/reducers/user'
import UserForm from './UserForm'
import {Redirect} from 'react-router-dom'
function CreateUserPage(props:any) {
    const [submit,setSubmit] = useState(false);

    const handleSubmit = (formData:any) => {
        props.createUserThunk(formData);
        setSubmit(true);
    }
    return (
        <div>
            <UserForm onSubmit={handleSubmit}/>
            {submit && <Redirect to="/"/>}
        </div>
    )
}



export default connect(null,{createUserThunk})(CreateUserPage)

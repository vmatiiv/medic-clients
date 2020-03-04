import React, { useState } from 'react'
import { connect } from 'react-redux'
import EditUserForm from './EditUserForm'
import {Redirect} from 'react-router-dom';
import {editUserThunk} from '../../redux/reducers/user';

function EditUser(props:any) {
    const [submit,setSubmit] = useState(false);

    const handleSubmit = (data:any) =>{

        props.editUserThunk({...data,id:props.user.id});
        setSubmit(true);
    }

    return (
        <div>
            <EditUserForm onSubmit={handleSubmit}/>
            {submit && <Redirect to="/"/>}
            <button onClick={props.history.goBack}> go back </button>
        </div>
    )
}

const mapStateToProps = (state:any) => ({
    user:state.users.currentUser    
})


export default connect(mapStateToProps,{editUserThunk})(EditUser)

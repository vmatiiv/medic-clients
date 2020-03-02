import React from 'react'
import { connect } from 'react-redux'
import {setCurrentUserAC} from '../../redux/reducers/user'
function User(props:any) {

    const onClick = () => {
        props.setCurrentUserAC(props.user);
    }
    return (
        <div onClick={onClick}>
            {props.user.id === props.currentUser.id ? 
            <h1 style={{color:"red"}}> {props.user.name} </h1> :  
            <h1>{props.user.name}</h1> }
        </div>
    )
}

const mapStateToProps = (state:any) => ({
    currentUser: state.users.currentUser
})
export default connect(mapStateToProps,{setCurrentUserAC})(User)

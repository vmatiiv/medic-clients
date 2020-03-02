import React from 'react'
import { connect } from 'react-redux'
import {setCurrentUserAC} from '../../redux/reducers/user'
function User(props:any) {
    debugger
    const onClick = () => {
        props.setCurrentUserAC(props.user);
    }
    return (
        <div onClick={onClick}>
            {props.user.name}
        </div>
    )
}


export default connect(null,{setCurrentUserAC})(User)

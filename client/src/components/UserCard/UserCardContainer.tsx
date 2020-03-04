import React from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'
import {deleteUserThunk} from '../../redux/reducers/user';
function UserCardContainer(props:any) {
    return < UserCard user={props.currentUser} deleteUser={props.deleteUserThunk}/>
}
const mapStateToProps = (state:any) => ({
    currentUser: state.users.currentUser
})

export default connect(mapStateToProps,{deleteUserThunk})(UserCardContainer)

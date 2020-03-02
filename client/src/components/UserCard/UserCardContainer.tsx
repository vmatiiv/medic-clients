import React from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'

function UserCardContainer(props:any) {
    return < UserCard user={props.currentUser}/>
}
const mapStateToProps = (state:any) => ({
    currentUser: state.users.currentUser
})

export default connect(mapStateToProps,null)(UserCardContainer)

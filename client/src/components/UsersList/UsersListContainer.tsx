import React from 'react'
import { connect } from 'react-redux'
import UsersList from './UsersList';

function UsersListContainer(props:any) {

    return <UsersList users={props.users}/>
}

const mapStateToProps = (state:any) => ({
    users:state.users.users
})


export default connect(mapStateToProps,null)(UsersListContainer);

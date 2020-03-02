import React, { useEffect } from 'react'
import {getUsersThunk} from './redux/reducers/user';
import {connect} from 'react-redux'
import UsersListContainer from './components/UsersList/UsersListContainer';
function App(props:any) {
  
  useEffect(()=>{
    fetchUsers();
  },[])

  const fetchUsers = () => {
    props.getUsersThunk()
  }
  return (
    <div>
      {props.users && <UsersListContainer/>}
    </div>
  )
} 
const mapToStateProps = (state:any) => ({
  users:state.users.users
})

export default connect(mapToStateProps,{getUsersThunk})(App);

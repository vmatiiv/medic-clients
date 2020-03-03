import React, { useEffect, Suspense } from 'react'
import {getUsersThunk} from './redux/reducers/user';
import {connect} from 'react-redux'
import UsersListContainer from './components/UsersList/UsersListContainer';
import UserCardContainer from './components/UserCard/UserCardContainer';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css'
import EditUser from './components/EditUser/EditUser';
import CreateUserPage from './components/CreateUser/CreateUserPage';

function App(props:any) {

  useEffect(()=>{
    fetchUsers();
  },[])

  const fetchUsers = () => {
    props.getUsersThunk()
  }
  return (

    <BrowserRouter>
     {(props.users && props.currentUser)  && <div className="app">

        <UsersListContainer/>
        <div>

            <Route path="/" exact component={UserCardContainer}/>
            <Route path="/edit" component={EditUser}/>
            <Route path="/create" component={CreateUserPage}/>

        </div> 
      </div>}
    </BrowserRouter>
  )
} 
const mapToStateProps = (state:any) => ({
  users : state.users.users,
  currentUser : state.users.currentUser
})

export default connect(mapToStateProps,{getUsersThunk})(App);

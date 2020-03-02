import React, { useEffect, Suspense } from 'react'
import {getUsersThunk} from './redux/reducers/user';
import {connect} from 'react-redux'
import UsersListContainer from './components/UsersList/UsersListContainer';
import UserCardContainer from './components/UserCard/UserCardContainer';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css'
import EditUser from './components/EditUser/EditUser';

function App(props:any) {

  useEffect(()=>{
    console.log('rerendered')
    fetchUsers();
  },[])

  const fetchUsers = () => {
    props.getUsersThunk()
  }
  return (

    <BrowserRouter>
     {props.users && <div className="app">

        <UsersListContainer/>
        <div>

            <Route path="/" exact component={UserCardContainer}/>
            <Route path="/edit" component={EditUser}/>

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

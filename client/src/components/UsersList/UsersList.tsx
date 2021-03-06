import React, { useState, ChangeEvent } from 'react'
import User from './User'
import {Link} from 'react-router-dom';

function UsersList({users}:any) {
    const [query,setQuery] = useState('')
    const list = users.filter( (x:any) => `${x.name} ${x.surname}`.includes(query)).map( (x:any) => <User key={x.id} user={x}/>)
    
    const changeQuery = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }
    return (
        <div className="user-list">
            <input type="text" value={query} onChange={changeQuery}></input>
            <Link to="/create">create</Link>
            {list}
        </div>
    )
}

export default UsersList

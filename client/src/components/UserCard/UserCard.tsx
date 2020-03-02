import React from 'react'
import { Link } from 'react-router-dom'

function UserCard({user}:any) {
    return (
        <div>
            {user.name} {user.surname} {user.sex} 
            <Link to="/edit">edit</Link>
        </div>
    )
}

export default UserCard

import React from 'react'
import { Link } from 'react-router-dom'

function UserCard({user,deleteUser}:any) {
    const getAge = () => {
        const year = new Date().getFullYear()-user.birthday.split('.')[2]
        return year
    }
    const handleDelete = () => {
        deleteUser(user.id);
    }
    return (
        <div>
            <header>
                <div>
    <h1>{user.name} {user.surname} {user.sex}</h1>
                    <h1>{getAge()}</h1>
                </div>
                <div>
                    <Link to="/edit">edit</Link>
                    <button onClick={handleDelete}>delete</button>
                </div>
            </header>
        </div>
    )
}

export default UserCard

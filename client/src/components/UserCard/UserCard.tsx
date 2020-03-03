import React from 'react'
import { Link } from 'react-router-dom'

function UserCard({user}:any) {
    const getAge = () => {
        const year = new Date().getFullYear()-user.birthday.split('.')[2]
        return year
    }

    return (
        <div>
            <header>
                <div>
                    <h1>{user.name} {user.surname}</h1>
                    <h1>{getAge()}</h1>
                </div>
                <div>
                    <Link to="/edit">edit</Link>
                </div>
            </header>
        </div>
    )
}

export default UserCard

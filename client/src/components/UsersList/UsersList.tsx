import React from 'react'
import User from './User'

function UsersList({users}:any) {

    const list = users.map( (x:any) => <User key={x.id} user={x}/>)
    return (
        <div>
            {list}
        </div>
    )
}

export default UsersList

import React from 'react'
import { connect } from 'react-redux'

function EditUser(props:any) {
    debugger;
    return (
        <div>
            <button onClick={props.history.goBack}> go back </button>
        </div>
    )
}

const mapStateToProps = (state:any) => ({
    user:state.users.currentUser    
})


export default connect(mapStateToProps,null)(EditUser)

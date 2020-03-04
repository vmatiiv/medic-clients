import React from 'react'
import {Field,reduxForm} from 'redux-form';

let UserForm = ({handleSubmit}) => {

    return(
    <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column"}}>
        <label>Birthday</label>
        <div>
            <Field name="birthday" component="input" type="date" placeholder="birthday"/>

        </div>

        <label>Country</label>
        <div>
            <Field name="country" component="input" type="text" placeholder="country"/>
        </div>

        <label>State</label>
        <div>
            <Field name="state" component="input" type="text" placeholder="state"/>
        </div>
        
        <label>Adress</label>
        <div>
            <Field name="address" component="input" type="text" placeholder="address"/>
        </div>


        <label>Sex</label>
        <div>
          <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
          <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
        </div>
        <input type="submit" value="submit"></input>
    </form>)
}




export default reduxForm({form:'user'})(UserForm)

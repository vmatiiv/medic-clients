import React from 'react'
import {Field,reduxForm,InjectedFormProps} from 'redux-form';

let UserForm = ({handleSubmit}:InjectedFormProps) => {

    return(
    <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column"}}>

        <Field name="name" component="input" type="text" placeholder="name"/>
        <Field name="surname" component="input" type="text" placeholder="surname"/>
        <label>Sex</label>
        <div>
          <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
          <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
        </div>
        <Field name="birthday" component="input" type="date" placeholder="birthday"/>
        <Field name="country" component="input" type="text" placeholder="country"/>
        <Field name="state" component="input" type="text" placeholder="state"/>
        <Field name="address" component="input" type="text" placeholder="address"/>
        <input type="submit" value="submit"></input>
    </form>)
}




export default reduxForm({form:'user'})(UserForm)

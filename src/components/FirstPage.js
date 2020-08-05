import React from 'react';

const FirstPage = (props) => {
 
    return(
        <div className= "container">
          <input className = "form-control" type = "text" name = "firstname" placeholder = "enter your first name" value={props.firstname} onChange = {props.handleFirstnameChange}/>
          <input className = "form-control"  type = "text" name = "lastname" placeholder = "enter your last name" value={props.lastname}   onChange = {props.handleLastnameChange} />
          <input className = "form-control"  type = "text" name = "email"  placeholder = "enter your email" value={props.email}  onChange = {props.handleEmailChange} />
          <input className = "form-control"  type = "text" name = "phone" placeholder = "enter your phone number" value={props.phone}  onChange = {props.handlePhoneChange} />
        <button onClick={props.nextStep}>Next</button>
        </div>
    )
}
export default FirstPage;
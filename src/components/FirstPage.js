import React from 'react';

const FirstPage = (props) => {
 
    return(
        <div className= "container">
          <input className = "form-control" type = "text" name = "firstname" value={props.firstname} onChange = {props.handleFirstnameChange}/>
          <input className = "form-control"  type = "text" name = "lastname" value={props.lastname}   onChange = {props.handleLastnameChange} />
          <input className = "form-control"  type = "text" name = "email"  value={props.email}  onChange = {props.handleEmailChange} />
          <input className = "form-control"  type = "text" name = "phone" value={props.phone}  onChange = {props.handlePhoneChange} />
        <button onClick={props.nextStep}>Next</button>
        </div>
    )
}
export default FirstPage;
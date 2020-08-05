import React from 'react';

const SummaryPage = (props) => {
    return <div>
        <ul style = {{listStyle:"none"}}>
            <li>FirstName: <strong>{props.firstname}</strong></li>
            <li>LastName: <strong>{props.lastname}</strong></li>
            <li>Email: <strong>{props.email}</strong></li>
            <li>PhoneNumber: <strong>{props.phone}</strong></li>
        </ul>    
        
        <button onClick = {props.prevStep}>Back</button>
    </div>
}
export default SummaryPage  
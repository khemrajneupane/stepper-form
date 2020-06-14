import React from 'react';

const SecondPge = (props) => {
 
    return(
        <div className= "container">
          <input className = "form-control" type = "text" name = "jobtitle" value = {props.jobtitle} onChange = {props.handleJobtilteChange} placeholder="jobtitle"/>
          <input className = "form-control"  type = "text" name = "office" value = {props.office} onChange = {props.handleOfficeChange} placeholder="office name"/>
            <button onClick = {props.prevStep}>Back</button>
        </div>
    )
}
export default SecondPge;
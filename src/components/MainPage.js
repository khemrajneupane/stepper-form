import React, { useState } from 'react';
import FirstPage from './FirstPage';
import SecondPge from './SecondPage';

const MainPage = () => {
    const [step, setStep] = useState(1);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [jobtitle, setJobtitle] = useState('');
    const [office, setOffice] = useState('');
    
   /* const handleInputChange = (e) => {
        setInfo({...info,[e.target.name]:e.target.value})
    }
    const handleJobChange = (e) => {
        setJob({...job,[e.target.name]:e.target.value})
    } */
    const  handleFirstnameChange = (e) => {
        setFirstname(e.target.value);
    }
    const  handleLastnameChange = (e) => {
        setLastname(e.target.value);
    }
    const  handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const  handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const  handleJobtitleChange = (e) => {
        setJobtitle(e.target.value);
    }
    const   handleOfficeChange = (e) => {
        setOffice(e.target.value);
    }

    const nextStep = () => {
        setStep(step + 1)
    }
    const prevStep = () => {
        setStep(step - 1)
    }
    const handleSteps = () =>{
        if(step === 1)
            return (<FirstPage
                handleFirstnameChange={handleFirstnameChange}
                handleLastnameChange={handleLastnameChange}
                handleEmailChange={handleEmailChange}
                handlePhoneChange={handlePhoneChange}
                firstname={firstname}
                lastname={lastname}
                email={email}
                phone={phone}
                nextStep={nextStep}
            />)
         if(step === 2){
             return (<SecondPge 
                handleOfficeChange={handleOfficeChange}
                handleJobtitleChange={handleJobtitleChange}
                prevStep={prevStep}
                />)
         }   
    }

    return (
        <div className="container">
            Mainpage
            {handleSteps()}
        </div>
    )
}
export default MainPage;
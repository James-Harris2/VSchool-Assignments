import React from 'react';
import ReactDOM from 'react-dom';

// build 3 useState hooks 
// name, email, phoneNumber, submit


// this is the HandleSubmit function
// It prevents the default behavior
//Submitted flag will turn to "True"


 const HandleSubmit = () =>  {
// the following functions are responsible for updating the state in 'forms.js'
const handleNameChange = () => {
    setName(e.target.value)
    console.log(handleEmailChange())
};
const handleEmailChange = (e) => {
    setEmail(e.target.value)
};
const handlePhoneNumberChange = (e) => {
// removes all spaces and dashes from phone number
const formattedValue = e.target.value.replace(/-/g, '')
    setPhoneNumber(formattedValue)
};
// checks if the form is valid or not
const isFormValid = name !== '' && email !=='' && phoneNumber !== '';
}

export default HandleSubmit;



             














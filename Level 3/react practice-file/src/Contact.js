import React from "react"
import App from "./App"
 

export default function Contact(props) {
    return(
        <div className="contact-card">
            <img src={props.images}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./assets/phone.png"/>
                <p>{props.phone}</p>
            </div>
           
            
            </div>
        )
 }
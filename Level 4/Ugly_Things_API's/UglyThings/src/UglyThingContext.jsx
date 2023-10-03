// Ugly Form Component
// Create Context
// For storing and managing data globally

import  { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const UglyThingsContext = createContext();


export default function UglyThingsProvider  ({ children }) {
    const [uglyThings, setUglyThings] = useState([]);
    console.log(uglyThings)
    function addUgly(uglyThing) {
        axios.post('https://api.vschool.io/jamesharris/thing', uglyThing)
            .then(response => setUglyThings(prev => [...prev, response.data]))
            .catch(error => {
                console.error("Error adding data:", error)
            });
    }

    function getUglies(){
        axios.get('https://api.vschool.io/jamesharris/thing')
        .then(response => {
            // handle success
            setUglyThings(response.data)
        })
        .catch(error => {
            // handle error
            console.log("Error fetch data:", error);
        })
    }

    useEffect(() => {
        getUglies()
    },[])

    return (
        <UglyThingsContext.Provider value={{ uglyThings, setUglyThings, addUgly, getUglies,}}>
            {children}
        </UglyThingsContext.Provider>
        
    )
}









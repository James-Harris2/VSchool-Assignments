import React from 'react'
import BlogList from './BlogList'   // Import BlogList component
import Header from './Header'       // Import Header component
import Footer from './Footer'       // Import Footer component
import './App.css'         // Import Color component


export default function App () {

    // const styles = {
    //     backgroundColor: "lightgreen",
    //             color: "black",
    //             textAlign: "center",
    //             fontFamily: "sans-serif",
    //             fontSize: "20px"
    // }

    return(
        <div
            className="header">
            <Header  /> 
            <BlogList /> 
            <Footer  /> 
        </div>
    )   
}





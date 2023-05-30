import React from 'react'
import Pet from './Pet'

export default function Friend(props) {
//get the data that was passed in through props
// {props.name}
console.log(props)
const myPets = props.pets.map(function (item, index){
    // console.log(item, "item")
    //(1)render Pet component
    //(2)pass in the data from the pets array into that component
    return (<Pet key={index} {...item} />)
} )


//display data in the return
//console logs can be used to make sure we are grabbing the correct data
// .map() through pets array



// **** TRYING TO STYLE MY CODE*****
//the value of className has to be a string

    return (
    //   <div style={{textAlign: "center"}}>
      <div className='backgroundColor'>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        <h1>{myPets}</h1>
        
      </div>
    );
}
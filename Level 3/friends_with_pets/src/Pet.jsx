import React from 'react'

export default function Pet(props){
    // pass in the props data
    // console.log(props)
    



    return (
      <div>
       {props.name}
       {props.breed}
     
      </div>
    );
}
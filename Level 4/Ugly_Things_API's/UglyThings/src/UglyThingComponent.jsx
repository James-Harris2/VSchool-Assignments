// UglyThingList Component

import React from 'react'

function UglyThingComponent () {
    const uglyThings = [];

    
    
    return (
        <div>
            {uglyThings.map((item, index) => (
                <div key={index}>
                    <img src={item.imgUrl} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button onClick={ () => handleDelete(index)}>Delete</button>
            </div>
            ))}
        
        </div>
    )
 } 
 

export default UglyThingComponent


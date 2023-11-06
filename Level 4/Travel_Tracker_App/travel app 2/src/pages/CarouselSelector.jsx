import React from 'react'


function CarouselSelector(props){
    const select = () => {
        props.select(props.slideId)
    }
    


return ( 
    <div
        className={"Carousel-selector " + (props. selected ? "Carousel-Selector-Selcted" : "")}
        onClick={select}
        
    ></div>
)
}

export default CarouselSelector;
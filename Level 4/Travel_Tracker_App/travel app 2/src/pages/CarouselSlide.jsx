import React from 'react'

function CarouselSlide(props) {
    return (
        <>
        {/* pathing always starts from App parent folder */}
        {/* <img src={props.img} /> */}
        {/* <h1>i work</h1> */}
            <div className={"Carousel-Slide " + (props.selected ? "Carousel-Slide-Selected" : "")}>
              <img src={props.img} alt="Slide" />
            </div>
        </>
    );
  }

  export default CarouselSlide;
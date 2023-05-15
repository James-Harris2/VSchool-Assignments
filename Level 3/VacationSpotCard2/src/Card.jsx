import React from 'react'

export default function Card(props){
    console.log(props.timeToGo, "time to go")
    let color = ""

  if (props.timeToGo === "Spring") {
    color = "green";
  } else if (props.timeToGo === "Summer") {
    color = "yellow";
  } else if (props.timeToGo === "Fall") {
    color = "orange";
  } else if (props.timeToGo === "Winter") {
    color = "blue";
  }
  console.log(color, "color")

let priceTag = ""
  
  if (props.price < 500) {
    priceTag = "$";
  } else if (props.price < 1000) {
    priceTag = "$$";
  } else if (props.price > 1000) {
    priceTag = "$$$";
  }
  console.log(priceTag)

  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h3>{props.price}{priceTag}</h3>
      <h3>{props.place}</h3>
      <h3>{props.timeToGo}</h3>
    </div>
  );
}
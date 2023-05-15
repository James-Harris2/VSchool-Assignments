import React from "react"
import {myVacationSpots} from "./Data"
import Card from "./Card"

export default function App() {

 const vacation = myVacationSpots.map((item, index) =>
    <Card key={index} {...item} />
  )
 
  // if (season === "Spring") {
  //   color = "green";
  // } else if (season === "Summer") {
  //   color = "yellow";
  // } else if (season === "Fall") {
  //   color = "orange";
  // } else if (season === "Winter") {
  //   color = "blue";
  // }
  // if (price < 500) {
  //   price = "$";
  // } else if (price < 1000) {
  //   price = "$$";
  // } else if (price > 1000) {
  //   price = "$$$";
  // }
  return (

    <div>
      {vacation}
      {/* <h1>{place}</h1>
      <h2>{price}</h2>
      <h3>{season}</h3> */}
    </div>
  );
};



// myVacationSpots();




//  function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a />
//         <a >
//         </a>
//       </div>
//       <h1>Vacation Destinations</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
          
//         </p>
//       </div>
//       <p>
      
//       </p>
//     </>
//   )
// }


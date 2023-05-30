import { useState } from 'react'


// what am I missing/ attempting to get app state to flip back & forth btween states
// Set Color { from Pink to Blue}

// function App() {
//   const [color, setColor] = useState('Pink')
// console.log(color)

// function changeColor() {
//   setColor(prevState => prevState === 'Pink'? 'Blue' : 'Pink')
// }
  


//   return(
//     <div className="App">
//       {/* <div className="name">{} </div> */}
//       <button onClick={changeColor}> 
//       Change Color Button 
//       </button>

        
//     </div>
//   )
// }
// export default App 

//  This is my People Object || Starts off with 3 renders down

// function People1() {
//   const [people, setPeople] = useState([
//       {
//         name: 'James Harris',
//         age: 44,
//         color: 'Red',
//       },
//       {
//         name: 'Jane Doe',
//         age: 35,
//         color: 'Green',
//       },
//       {
//         name: 'Jimmy Doe',
//         age: 45,
//         color: 'Blue',
//       },
  
//     ])

//     function changeState() {

//       setPeople(prev => ([
//         ...prev, 
//        
//         prev[2].name = "Test"
//       ]))

//       console.log(people), "people"
//     }

//     return(
//       <div>
//         <button onClick={changeState}>Change State Here!</button>
//       </div>
//     )

//   }
  
// export default People1


// function FourA() {
  
  //   const [colors, setColors] = useState(["pink", "blue"]);
  
  //   function addColor() {
    //     setColors(prevColors => [...prevColors, "green"]);
    
    //   }
    //   console.log(colors)
    
    //   return (
      //     <div>
      //       <button onClick={addColor}>Add Color</button>
      //     </div>
      //   )
      // }
      
      // export default FourA


      function FourB () {
        const [countObject, setCountObject] = useState({
          count: 0,
        });

      
        function updateObject() {
          setCountObject(prevState => (

            {count: prevState.count + 1}
          

            )
          )


        }
        
       console.log(countObject)
     
      
        
        return (
          <>
         
            <h1>{countObject.count}</h1>
            <button onClick={updateObject}>Update Object</button>
        
          </>
        );
      }
      
      export default FourB
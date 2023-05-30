//importing React
import React from 'react'
import { friendsData } from './Data'
import Friend from './Friend'

//creating and exporting your functional component
export default function FriendList (){
    //top part is where your logic can live
    // Need to retrieve data from friendsData
    const friend = friendsData.map(function(item, index){
        // console.log(item)
        return(<Friend key={index} {...item} />)
    } )
    // .map() friendsData
    //inside of your .map(), render a <Friend /> component

    //pass in the name, age, and pets of each friend as a prop


    //bottom part is where you place your return
    return (
      <div>
        {friend}
      </div>
    );

}
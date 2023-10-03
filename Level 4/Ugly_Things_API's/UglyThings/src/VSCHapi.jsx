// The Request Section for our UGLY THINGS API's
import axios from "axios"
import { useContext, useEffect } from "react"
import { UglyThingsContext } from "./UglyThingContext"
import UglyThingCard from "./UglyThingCard"

function VSCHapi() {
    const {uglyThings, getUglies} = useContext(UglyThingsContext)
    useEffect(() => {
        getUglies();
    }, [])


    const uglyThingsList = uglyThings.map(item => {
        return <UglyThingCard item={item} getUglies={getUglies}/>
    })
return (
   <>
        {uglyThingsList}
   </>

)
    

    // This section Cover POST REQUEST from Above
    
}
export default VSCHapi
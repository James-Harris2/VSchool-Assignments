// App Component
import React from 'react'
import UglyThingComponent from './UglyThingComponent'
import VSCHapi from './VSCHapi'
import UglyThingsList from './UglyThingsList'
import { UglyThingsContext } from './UglyThingContext'



function App () {
  return (
    <>
   
    <UglyThingComponent />
    <UglyThingsList />
    <VSCHapi />
    </>

  )
}

export default App
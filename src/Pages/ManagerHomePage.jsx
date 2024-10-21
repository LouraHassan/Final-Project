import React from 'react'
import DepCard from '../Components/DepCard'
import PositionCard from '../Components/PositionCard'

function ManagerHomePage() {
  return ( 
    <div>
      
      <DepCard Employees={25} Shortage={2} Surplus={0}/>
      <br></br>
      <PositionCard Position="Senior Project Manager" Department="HR" Experience="5"/>
    </div>
  )
}

export default ManagerHomePage

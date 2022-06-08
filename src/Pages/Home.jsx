import React from 'react'
import checker from '../Components/utility/checker'
import HomeDefault from './HomeDefault'
import HomeDeliv from './HomeDeliv'
import HomeCustomer from './HomeCustomer'

function Home() {
  
  let role = checker()
    

    if(role === 'DELIVERY_MAN')
  return (
    <HomeDeliv/>
  )


  if(role === '')
  return (
    <HomeDefault/>
  )


  if(role === 'SELLER')
  return (
    <HomeDefault/>
  )


  if(role === 'CUSTOMER')
  return (
    <HomeCustomer/>
  )

  }
export default Home
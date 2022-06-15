import React from 'react'
import checker from '../../Components/utility/checker'
import HomeDefault from '../Home_Pages/HomeDefault'
import HomeDeliv from '../Home_Pages/HomeDeliv'
import HomeCustomer from '../Home_Pages/HomeCustomer'
import CustomerCreation from '../CustomerCreation'

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
    <CustomerCreation/>
  )


  if(role === 'CUSTOMER')
  return (
    <HomeCustomer/>
  )

  }
export default Home
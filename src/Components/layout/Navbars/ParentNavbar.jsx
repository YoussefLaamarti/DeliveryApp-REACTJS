import React from 'react'
import NavbarDelivery from './NavbarDelivery'
import NavbarSeller from './NavbarSeller'
import Navbar from './Navbar'
import NavbarCustomer from './NavbarCustomer'

import checker from '../../utility/checker'

function ParentNavbar() {
  let role = checker()
    

    if(role === 'DELIVERY_MAN')
  return (
    <NavbarDelivery/>
  )
  if(role === '')
  return (
    <Navbar/>
  )
  if(role === 'SELLER')
  return (
    <NavbarSeller/>
  )
  if(role === 'CUSTOMER')
  return (
    <NavbarCustomer/>
  )
}

export default ParentNavbar
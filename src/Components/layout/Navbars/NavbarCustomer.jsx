import React from 'react'
import {FaGlobeAfrica} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import userchecker from '../../utility/userchecker'

function Navbar({ title }) {

let user = userchecker()


  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className="container mx-auto">
<div className="flex-none px-2 mx-2">
    <FaGlobeAfrica className='inline pr-2 text-3xl'/>
    <Link to ='/' className='text-lg font-bold align-middle'>{title}</Link>
    
</div>
<div className="flex-1 px-2 mx-2">
   <div className="flex justify-end">
       
  
       <Link to='/logout' className='btn btn-primary btn-sm rounded-btn'> Logout</Link>
      
       </div>  
</div>


</div>
</nav>
  )
}

Navbar.defaultProps = {
    title: 'Delivery App'
}

Navbar.propTypes = {
    title: PropTypes.string,
}
export default Navbar
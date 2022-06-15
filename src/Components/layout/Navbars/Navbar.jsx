import React from 'react'
import {FaGlobeAfrica} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className='navbar  shadow-lg bg-neutral text-neutral-content'>
        <div className="container mx-auto">
<div className="flex-none px-2 mx-2">
    <FaGlobeAfrica className='inline pr-2 text-3xl'/>
    <Link to ='/' className='text-lg font-bold align-middle'>{title}</Link>
</div>
<div className="flex-1 px-2 mx-2">
   <div className="flex justify-end">
       

       <Link to='/' className='btn mr-2 btn-ghost btn-sm rounded-btn'> Home</Link>
       <Link to='/login' className='btn btn-primary btn-sm rounded-btn'> Login</Link>

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
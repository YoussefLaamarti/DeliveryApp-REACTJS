import React from 'react'
import {FaGlobeAfrica} from 'react-icons/fa'
import  {  useState , useEffect } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import userchecker from '../../utility/userchecker'
import axios from '../../utility/axos'
function Navbar({ title , test }) {
 
 
  const [boxes , setBoxes] = useState([])
  //Get the current user  username
  let user = userchecker()
  
  useEffect(() => {

    YourDelieveriesCounter(user)
 
    
  }, []);




const YourDelieveriesCounter = async (xx) => {
  const response = await axios.get('/delivery/d/'+xx)

  let box=response.data.length
  
  
  
  return setBoxes(box);
}



  
  


  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className='container mx-auto'>
<div className='flex-none px-2 mx-2'>
    <FaGlobeAfrica className='inline pr-2 text-3xl'/>
    <Link to ='/' className='text-lg font-bold align-middle'>{title}</Link>
    
</div>
<div className='flex-1 px-2 mx-2'>
   <div className='flex justify-end'>
       

      <div className='indicator'>
      <span className='indicator-item    badge badge-error'> <b>{boxes}</b></span> 
       <Link to='/DelivMyPackages' className='btn  btn-sm rounded-btn'> My Packages</Link>
       </div>
       <Link to='/DelivPackages' className='btn  btn-sm rounded-btn'> My Delivered Packages</Link>
       <Link to='/' className='btn  btn-sm rounded-btn'> Home</Link>
       <Link to='/logout' className='btn btn-primary ml-5 btn-sm rounded-btn'> logout</Link>
       
      
       </div>  
</div>


</div>
</nav>
  )
}

Navbar.defaultProps = {
    title: 'Delivery App',
    test : 'rrr',
}

Navbar.propTypes = {
    title: PropTypes.string,
    test:PropTypes.string,
}
export default Navbar
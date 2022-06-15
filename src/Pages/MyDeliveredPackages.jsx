import React from 'react'
import  { useState , useEffect } from 'react';
import Boxitem from '../Components/boxes/Boxitem';
import Spinner from '../Components/layout/Spinner';
import axios from '../Components/utility/axos';

import userchecker from '../Components/utility/userchecker'
function HomeDeliv() {
    const [boxes , setBoxes] = useState([])
    const [loading , setLoading ] = useState(true)
    const [userid , setuserid] = useState([])
    
    
    let user = userchecker()

    

    const fetchBoxes = async (tee) => {
      const response = await axios.get('/delivery/do/'+tee)
  

  
      setBoxes(response.data);
      
      setTimeout(() => {
        setLoading(false)
      }, 1000)
      
  }

    useEffect(() => {
        fetchBoxes(user)
      
      }, []);

      


    
    if(!loading){
        return (
          
            <div>
              <center>
                 <p className='text-5xl mb-8'><b>Your Delivered Packages</b></p>
                 </center>
                {boxes.map((box) => (
              <Boxitem key={box.code} box={box} userid={userid}/>
            ))}
            
            
            </div>
          )
    
    }else{
        return (
          
            <div>
              
             <Spinner /> 
            
            
            </div>
          )
    }
    
      
    }

export default HomeDeliv


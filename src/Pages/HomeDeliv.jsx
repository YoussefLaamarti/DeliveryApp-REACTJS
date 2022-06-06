import React from 'react'
import  { useState , useEffect } from 'react';
import Boxitem from '../Components/boxes/Boxitem';
import Spinner from '../Components/layout/Spinner';

function HomeDeliv() {
    const [boxes , setBoxes] = useState([])
    const [loading , setLoading ] = useState(true)
    useEffect(() => {
        fetchBoxes()
        
      }, []);

    const fetchBoxes = async () => {
        const response = await fetch('http://localhost:7070/pendingboxes')
    
        const data = await response.json()
    
        setBoxes(data);
        
        setTimeout(() => {
          setLoading(false)
        }, 1000)
        
    }
    
    if(!loading){
        return (
          
            <div>
                
                {boxes.map((box) => (
              <Boxitem key={box.code} box={box}/>
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
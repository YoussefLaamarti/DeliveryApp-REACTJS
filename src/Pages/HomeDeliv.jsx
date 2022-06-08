import React from 'react'
import  { useState , useEffect } from 'react';
import Boxitem from '../Components/boxes/Boxitem';
import Spinner from '../Components/layout/Spinner';
import axios from '../Components/utility/axos';

function HomeDeliv() {
    const [boxes , setBoxes] = useState([])
    const [loading , setLoading ] = useState(true)
    let token = localStorage.getItem("token")
    if(token == null)token = ""
    useEffect(() => {
        fetchBoxes()
        
      }, []);

    const fetchBoxes = async () => {
        const response = await axios.get('http://localhost:7070/pendingboxes')
    

    
        setBoxes(response.data);
        
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
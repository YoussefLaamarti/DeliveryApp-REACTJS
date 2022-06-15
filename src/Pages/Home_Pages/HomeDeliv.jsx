import React from 'react'
import  { useState , useEffect } from 'react';
import Boxitem from '../../Components/boxes/Boxitem';
import Spinner from '../../Components/layout/Spinner';
import axios from '../../Components/utility/axos';
import userchecker from '../../Components/utility/userchecker'

function HomeDeliv() {
    const [boxes , setBoxes] = useState([])
    const [loading , setLoading ] = useState(true)
    const [userid , setuserid] = useState([])
    let etat = 'a'
    
    
    let token = localStorage.getItem("token")
    if(token == null)token = ""
    let user = userchecker()
    
    
    useEffect(() => {
        fetchBoxes()
        Userid(user)
        
      }, []);


      const Userid = async (tee) => {
        const response = await axios.get('/delviery/uuu/'+tee)
    
        
    
        setuserid(response.data)
       
      
        
              
        
        
    }


    const fetchBoxes = async () => {
        const response = await axios.get('/pendingboxes')
    

    
        setBoxes(response.data);
        
      
        
                                
        setTimeout(() => {
          setLoading(false)
        }, 1000)
        
    }

    
    
    if(!loading){
      
      if(boxes.length === 0){
        return (

      <div class="alert alert-info  shadow-lg">
        <div>
       <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span><b>No New Packages </b></span>
        </div>
        </div>
              )

    }
        return (
          
          
            <div>
                
               
            

                {boxes.map((box) => (
              <Boxitem key={box.code} box={box} userid={userid} etat={etat}/>
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
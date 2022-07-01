import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import Forbidden from './Forbidden'
import checker from '../Components/utility/checker'
import {toast} from 'react-toastify'


function Login() {

  
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    const handle1 =(e) => setUsername(e.target.value)
    const handle2 =(e) => setPassword(e.target.value)


    const handleSubmit = (e) =>{
        e.preventDefault()
        
    
        if(username === '' || password === ''){
          toast.warning(' fill the forms' ,{theme :'dark'} )

      }else{
        log() 

        
        //trying to afficher this token

   

  
        
       
      }
 }

 const formData  = new FormData();

 
   formData.append("username", username);
   formData.append("password", password);


const log = async () => {
try {
 let rep = await axios.post("/login",formData)
 
 
  localStorage.setItem("token",rep.data["access-token"])
  
  document.location.href = "/"
}catch(e){

  toast.error('Credentials Incorrect' ,{theme :'dark'} )


}}

    


if(checker() === ''){
  return (

    <center>
      
         
    <div className='w-full max-w-xs'>
  <form  onSubmit={handleSubmit} className='   rounded px-8 pt-6 pb-8 mb-4'>
    <div className='mb-4'>
      <label className='block text-white text-sm font-bold mb-2' htmlFor='username'>
        Username
      </label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text'  value={username} onChange={handle1} />
    </div>
    <div className='mb-6'>
      <label className='block text-white text-sm font-bold mb-2' htmlFor='password'>
        Password
      </label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password'  value={password} onChange={handle2}/>
      
    </div>
    
    <div className='flex items-center justify-center '>
      <button className='btn-primary text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline' type='submit'>
        Sign In
      </button>
     
    </div>
  </form>

</div>

</center>
  )
}else{
  return(<Forbidden/>)
}
 
}

export default Login
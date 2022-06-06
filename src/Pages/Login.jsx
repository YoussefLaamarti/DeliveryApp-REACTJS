import React from 'react'
import {useState} from 'react'



function Login() {

    const [token, setToken] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    const handle1 =(e) => setUsername(e.target.value)
    const handle2 =(e) => setPassword(e.target.value)


    const handleSubmit = (e) =>{
        e.preventDefault()
        
    
        if(username === '' || password === ''){
          alert('fill the forms')
      }else{
        log()

        //trying to afficher this token
        console.log(token)

   

  
        
       
      }
 }

 const formData  = new FormData();

 
   formData.append("username", username);
   formData.append("password", password);

 const requestOptions = {
  method: 'POST',
  mode: 'no-cors',
 
  body: formData

};
const log = async () => { const Response = await fetch('http://localhost:7070/login', requestOptions)

setToken(Response.json())
}

    



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
}

export default Login
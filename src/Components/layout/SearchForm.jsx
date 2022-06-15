import React from 'react'
import {useState} from 'react'
import Boxitem from '../boxes/Boxitem'
import {toast} from 'react-toastify'


function SearchForm() {



  const [boxes , setBoxes] = useState([])
  const [loading , setLoading ] = useState(true)
  const [userid , setuserid] = useState([])

  const [text, setText] = useState('')
  const handleChange =(e) => setText(e.target.value)
  
  
  

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(text === ''){
      toast.warning(' fill the form' ,{theme :'dark'} )
  }else{
    SearchBoxes(text)
    
    setText('')
   
  }
  }


    //get search results
    const SearchBoxes = async (tee) => {
      const response = await fetch('/box/ref/'+tee)
      if(response.status >= 400){
        toast.error('code not found' ,{theme :'dark'} )
        return

      }
      const datatext = await response.text() 
      if(datatext == ''){
        toast.error('code not found' ,{theme :'dark'} )
      return
      }
      const data =JSON.parse(datatext)
     
        setBoxes(data);
        setLoading(false)
      
      
      
      
      
  
      
  }
  
  if(!loading){
      return (
        
          <div>
              
              
            <Boxitem key={boxes.code} box={boxes} userid={userid}/>
          
          
          
          </div>
        )
  
  }else {
    return (
      <div>
        <center>
<form onSubmit={handleSubmit}>
<div className='form-input  animate__animated animate__slideInLeft  '>
<div className='form-input__input    '>
<input placeholder='Type your package number here' id='search-input' className='' name='form_input_name' type='text'  value={text} onChange={handleChange} />
</div>
</div>
</form>
</center>
</div>
    )
  }
  


  













}



export default SearchForm
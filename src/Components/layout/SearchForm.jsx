import React from 'react'
import {useState} from 'react'
import Boxitem from '../boxes/Boxitem'


function SearchForm() {



  const [boxes , setBoxes] = useState([])
  const [loading , setLoading ] = useState(true)

  const [text, setText] = useState(' ')
  const handleChange =(e) => setText(e.target.value)
  
  
  

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(text === ''){
      alert('enter something')
  }else{
    SearchBoxes(text)
    
    setText('')
   
  }
  }


    //get search results
    const SearchBoxes = async (tee) => {
      const response = await fetch('http://localhost:7070/box/ref/'+tee)
      if (response.status === 400) {
        return alert('enter something')
      }
      
      const data = await response.json()
     
        setBoxes(data);
        setLoading(false)
      
      
      
      
      
  
      
  }
  
  if(!loading){
      return (
        
          <div>
              
              
            <Boxitem key={boxes.code} box={boxes}/>
          
          
          
          </div>
        )
  
  }else {
    return (
      <div>
  <form onSubmit={handleSubmit}>
  <div className='form-control'>
    <div className='input-group '>
      <input type='text' placeholder='Search…' className='input input-bordered' value={text} onChange={handleChange} />
      <button className='btn btn-square'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /></svg>
      </button>
    </div>
  </div>
  </form>
  
      </div>
    )
  }
  


  













}



export default SearchForm
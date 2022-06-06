import React from 'react'
import spinner from '../assets/spinner.gif'

function Spinner() {
  return (
    <div className='w-50 mt-10'>
        <img
         width={100} 
         className='text-center mx-auto'
         src={spinner}
         alt='Loading...'></img></div>
  )
}

export default Spinner
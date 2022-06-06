import React from 'react'
import {useState} from 'react'

function PackageCreation() {



  //for package name
    const [textname, setTextname] = useState('')
    const handleChangename =(e) => setTextname(e.target.value)

   //for City 
    const [textCity, setTextCity] = useState('')
    const handleChangeCity =(e) => setTextCity(e.target.value)

   //for Zipcode
    const [textZipcode, setTextZipcode] = useState('')
    const handleChangeZipcode =(e) => setTextZipcode(e.target.value)

   //for Street
    const [textStreet, setTextStreet] = useState('')
    const handleChangeStreet =(e) => setTextStreet(e.target.value)

    const handleSubmit = (e) =>{
        e.preventDefault()
    
        if(textname === '' || textCity === '' || textZipcode === '' || textStreet === '' ){
          alert('enter something')
      }else{
       
        go()

        setTextname('')
        setTextCity('')
        setTextZipcode('')
        setTextStreet('')

       
      }
      }


       //Create the package
       const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            package_name: textname,
            city: textCity,
            zipcode: textZipcode,
            street: textStreet, })
    };
    function  go() { fetch('http://localhost:7070/box', requestOptions)}
        





    return (
        <form className='w-full max-w-sm' onSubmit={handleSubmit}>
  <div className='md:flex md:items-center mb-6'>
    <div className='md:w-1/3'>
      <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='inline-full-name'>
        Package Name
      </label>
    </div>
    <div className='md:w-2/3'>
      <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id='inline-full-name' type='text' value={textname} onChange={handleChangename} />
    </div>
  </div>
  <div className='md:flex md:items-center mb-6'>
    <div className='md:w-1/3'>
      <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='inline-full-name'>
        City
      </label>
    </div>
    <div className='md:w-2/3'>
      <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id='inline-full-name' type='text' value={textCity} onChange={handleChangeCity} />
    </div>
  </div>
  <div className='md:flex md:items-center mb-6'>
    <div className='md:w-1/3'>
      <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='inline-full-name'>
        Zipcode
      </label>
    </div>
    <div className='md:w-2/3'>
      <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id='inline-full-name' type='text'  value={textZipcode} onChange={handleChangeZipcode}/>
    </div>
  </div>
  <div className='md:flex md:items-center mb-6'>
    <div className='md:w-1/3'>
      <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor='inline-full-name'>
        Street
      </label>
    </div>
    <div className='md:w-2/3'>
      <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id='inline-full-name' type='text' value={textStreet} onChange={handleChangeStreet}/>
    </div>
  </div>
  <div className='md:flex md:items-center mb-6'>
    <div className='md:w-1/3'></div>
   
  </div>
  <div className='md:flex md:items-center'>
    <div className='md:w-1/3'></div>
    <div className='md:w-2/3'>
      <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type='submit'>
        Create
      </button>
    </div>
  </div>
</form>
      )
}

export default PackageCreation
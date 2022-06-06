import React from 'react'
import PropTypes from 'prop-types'

function Useritem({ user }) {
    return (
      <div className='card   bg-base-100'>
        <div className='flex-row items-center space-x-4 card-body'>
          <div>
            <div className='avatar'>
              <div className=' shadow w-14 h-14'>
                <img src={'https://cdn-icons-png.flaticon.com/512/595/595472.png'} alt='Box' />
              </div>
            </div>
          </div>
          <div>
            <h2 className='card-title h-20 text-blue-300'>{user.username}</h2>
            <b><h1 className='  text-red-200  '>{"Status : "}</h1></b>
            <b><h1 className='  text-green-200 h-10'>{user.email }</h1></b>
      
           
  
           
  
  
            
          </div>
        </div>
      </div>
    )
  }
  
  Useritem.propTypes = {
    user: PropTypes.object.isRequired,
  }

export default Useritem
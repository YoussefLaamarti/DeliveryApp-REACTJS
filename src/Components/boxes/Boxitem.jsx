
import PropTypes from 'prop-types'

function BoxItem({ box }) {
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
          <h2 className='card-title h-20 text-blue-300'>{box.package_name}</h2>
          <b><h1 className='  text-red-200  '>{"Status : "}</h1></b>
          <b><h1 className='  text-green-200 h-10'>{box.status }</h1></b>
          {box.status === "DELIVERED" ? <> 
          <b><h1 className='  text-red-200  '>{"Delivered on  : "}</h1></b>
          <b><h1 className='  text-green-200 h-16'>{ new Date(box.date).toDateString()}</h1></b>
          </> : null}
         

         


          
        </div>
      </div>
    </div>
  )
}

BoxItem.propTypes = {
  box: PropTypes.object.isRequired,
}

export default BoxItem
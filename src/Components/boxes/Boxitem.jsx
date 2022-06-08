
import PropTypes from 'prop-types'
import checker from '../utility/checker'
import {Link} from 'react-router-dom'
import AffectDeliv from '../../Pages/AffectDeliv'

function BoxItem({ box }) {


  const handleClick = (code) => {

    alert(code)
  }



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
          
          <h2 className='card-title h-20 text-green-200'>{box.package_name}</h2>
          <b><h1 className='  text-red-200  '>{'Status : '}</h1></b>
          <b><h1 className='  text-green-200 h-10'>{box.status }</h1></b>
          <b><h1 className='  text-red-200  '>{'UUID : '}</h1></b>
          <b><h1 className='  text-green-200 h-10'>{box.code }</h1></b>
          {box.status === 'DELIVERED' ? <> 
          <b><h1 className='  text-red-200  '>{'Delivered on  : '}</h1></b>
          <b><h1 className='  text-green-200 h-16'>{ new Date(box.date).toDateString()}</h1></b>
          </> : null}
     
         {checker() == 'DELIVERY_MAN' ?   <div>
<a href='#my-modal-2' class='btn'>More Details</a>

<div className='modal' id='my-modal-2'>
  <div className='modal-box'>
    <h3 className='font-bold text-lg text-red-300 mb-5'>Package Details</h3>
    <b><p className='py-2 text-red-100'>NAME : {box.package_name}</p></b>
    <b><p className='py-2 text-red-100'>CITY : {box.city} </p></b>
    <b><p className='py-2 text-red-100 '>STREET : {box.street}</p></b>
    <b><p className='py-2 text-red-100'>ZIPCODE : {box.zipcode}</p></b>
    <div className='modal-action'>
    <button  onClick={() => handleClick(box.code)} className='btn btn-success'  >AFFECT</button>
     <a href='#' className='btn btn-error'>PASS</a>
    </div>
  </div>
</div>
</div> : null}
         


          
        </div>
      </div>
    </div>
  )
}

BoxItem.propTypes = {
  box: PropTypes.object.isRequired,
}

export default BoxItem
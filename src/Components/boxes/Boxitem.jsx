
import PropTypes from 'prop-types'
import checker from '../utility/checker'
import axios from '../utility/axos';

import  {  useState  } from 'react';




function BoxItem({ box , userid } ) {
  const [boxes , setBoxes] = useState([])
  let idid = userid.id
  



//affect
const affectationBoxToDelivery = async (id,id_delibv) => {
  await axios.put('http://localhost:7070/box/ud/'+id+'/'+id_delibv)
//reload page
document.location.reload()
}

//affect
const updatebox = async (stat , id ) => {
  await axios.put('http://localhost:7070/box/us/'+id, { 
  
   status: stat,
})
//reload page
document.location.reload()
}



  //Affect Box
  const affect = (b) => {
    

    affectationBoxToDelivery(b,idid)


  

}

//update box
const update = (b , id ) => {
    
  updatebox(b,id)





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
        
          <h2 className='card-title h-10 mb-4 text-yellow-300'><b>{box.package_name}</b></h2>
          <ul className ='steps'>
            {box.status === 'NOT_YET_DELIVERED' ? <>
            <li className='step step-primary text-green-300'><i><b>NOT YET DELIVERED</b></i></li>
            <li className='step text-white  '><i><b>IN PROGRESS</b></i></li>
            <li className='step text-white '><i><b>DELIVERED</b></i></li>
            </>
            : null}
            
           </ul>
           <ul className='steps'>
            {box.status === 'IN_PROGRESS' ? <>
            <li className='step step-primary text-white '><i><b>NOT YET DELIVERED</b></i></li>
            <li className='step step-primary text-green-300'><i><b>IN PROGRESS</b></i></li>
            <li className='step text-white'><i><b>DELIVERED</b></i></li>
            </>
            : null}
            
           </ul>
           <ul className='steps'>
            {box.status === 'DELIVERED' ? <>
            <li className='step step-primary text-white'><i><b>NOT YET DELIVERED</b></i></li>
            <li className='step step-primary text-white'><i><b>IN PROGRESS</b></i></li>
            <li className='step step-primary text-green-300'><i><b>DELIVERED</b></i></li>
            </>
            : null}
            
           </ul>
          <b><h1 className='  text-red-300 mt-10 '>{'UUID : '}</h1></b>
          <b><h1 className='   text-white h-10'>{box.code }</h1></b>
          {box.status === 'DELIVERED' ? <> 
          <b><h1 className='  text-red-300  '>{'Delivered on  : '}</h1></b>
          <b><h1 className='   text-white h-16'>{ new Date(box.date).toDateString()}</h1></b>
          </> : null}
     
         {checker() == 'DELIVERY_MAN' ?   <div>
    <button  onClick={() => affect(box.id)} className='btn btn-success mr-2'  >AFFECT</button>
    <button  onClick={() => update('2' , box.id)} className='btn btn-error mr-2'  >DELIVER</button>

</div> : null}
         


          
        </div>
      </div>
    </div>
  )
}

BoxItem.propTypes = {
  box: PropTypes.object.isRequired,
  userid: PropTypes.object.isRequired,
}

export default BoxItem
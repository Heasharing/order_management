import React from 'react';
import logo from '../../assets/img/hea.jpg'
const ShowScreenPage = () => {
  return(
    <div className='bg-black sticky flex justify-items-center top-0 '>
      <div style={{backgroundColor:"blue"}}>
        <img src={logo} alt='img' width="100" height={100}/>
        <div className='text-gray-50 justify-between'> Hello</div>
        </div>
         
       
    
      </div>
    
  )
};
export default ShowScreenPage;
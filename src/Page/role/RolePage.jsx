
// import { Button,Input, Space } from 'antd'
// import { Group } from 'antd/es/avatar';
// import { list } from 'postcss'
// import React, { useState } from 'react'

// function RolePage() {

//   const [state, setState] = useState({
//     list:[
//       {
//         id: '1',
//         name: 'Role 1',
//         group: 'IT'
//       },
//       {
//         id: '2',
//         name: 'Role 2',
//         group: 'HR'
//       },
//       {
//         id: '3',
//         name: 'Role 3',
//         group: 'Finance'
//       },
//     ],
//     loading:false,
//     total:100,
//   });
//   const [objRole, setObjRole] = useState({
//     id:"",
//     name:"",
//     group:"",
//   });
//   const OnclickNew=()=>{
//     var objRole={
//       id:1,
//       name:"Hea",
//       group:"IT",
//     };
//     setState((p) =>({
//       ...p,
//       list:[...p.list,objRole],
//   }));
//   }
//   const Onsave=()=>{

//   }



  
  
//   return (
//     <div>
//       <div className='main-page-header'>
//        <Space style={{backgroundColor:"gray"}}>
//        <div className='font-bold text-black size-15 w-10'>Role</div>
//        <Input.Search placeholder ="Search" checked className=' cursor-pointer border-black-100  stroke-zinc-600 w-50 border-hidden before:bg-blue-500'/>
    

//        </Space>
//         <div>
//           <Button  type='primary' onClick={OnclickNew}>New</Button>
//         </div>
//       </div>
//       <div>
//      <div>
//       <Space>
//        <Input allowClear placeholder ="Id" value={objRole.id} checked className=' cursor-pointer border-black-100  stroke-zinc-600 w-50 border-hidden before:bg-blue-500'/>
//        <Input allowClear placeholder ="Name" value={objRole.name} checked className=' cursor-pointer border-black-100  stroke-zinc-600 w-50 border-hidden before:bg-blue-500'/>
//        <Input allowClear placeholder ="Group"  value={objRole.roup}checked className=' cursor-pointer border-black  w-50 border-hidden before:bg-blue-500'/>
//        <button  type='primary' onClick={Onsave}></button>
//        </Space>

//       </div>
     
//      </div>

//       {state.list.map((item,index)=>{
//           // <Group key={index} style={{backgroundColor:"gray",marginBottom:5,borderRadius:10}} size="large">
            
//           <div key={index} style={{border:10, backgroundColor:"gray",marginBottom:5,borderRadius:10}}>
//              <div key={item.id}>
//               {index+1}. {item.name} - {item.group}
             
//           </div>
//           <div style={{textAlign:"right"}}>
//           <div style={{padding:10,}}> </div>
//           <space >
//               <Button type='primary' onClick={()=>setState({loading:true})} className=' right-6  mb-1 '>Edit</Button>
//               <Button  danger type='primary' onClick={()=>setState({loading:true})} className=' right-4'>Delete</Button>
//               <Button  type='primary' disabled={state.loading} className=' right-2'>
//                 {state.loading? 'Loading...' : 'Save'}
//               </Button>

//               </space>
              
         
//           </div>
//           </div>
         
        
//       })}
     
//     </div>
//   )
// }

// export default RolePage

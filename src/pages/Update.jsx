import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProductApi } from '../../services/allApi';
function Update() {



  const [data,setData]=useState({
    name:"",
    category:"",
    price:"",
    stock:"",
    description:""
  })
  const {id}= useParams()


  useEffect(()=>{
    axios.get('https://product-inventory-system-react-server.onrender.com/products/'+id).then(res=>setData(res.data)).catch(err=>console.log(err));
    
    
  },[])
  console.log(data);


  
  const handlecancel=()=>{
    setData({
      name:"",
      category:"",
      price:"",
      stock:"",
      description:""
    })
  }

 
  //  const handleupdate=()=>{
  //   axios.put('https://product-inventory-system-react-server.onrender.com/products/'+id,data).then(res=>console.log(res).catch(err=>console.log(err)
  //   )
  //   )
  //  }
  
  const handleupdate=async()=>{
    const {name,category,price,stock,description}=data
    if(!name|| !category|| !price || !stock|| !description){
      toast.warning('please fill the form completely')
    }
    else{



   const result=await updateProductApi(data.id,data)
  console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success('product added sucessfully')
      }

    
   
    }
}
  
  


  return (

    <div>
        <h1 className='text-center text-success mt-5'>UPDATE PRODUCT</h1>
    <div className='justify-content-center d-flex mt-4'>
        
  
      <div className='border border-success p-5 ' style={{height:480 ,width:400}}>
      <input type='text' value={data.name} className='form-control mb-3 border border-success' placeholder='Name of product' onChange={(e)=>setData({...data,name:e.target.value})} />
      <input type='text'  value={data.category}   className='form-control mb-3 border border-success' placeholder='category'
      onChange={(e)=>setData({...data,category:e.target.value})} />
      <input type='text'  value={data.price}   className='form-control mb-3 border border-success' placeholder='price'
      onChange={(e)=>setData({...data,price:e.target.value})}/>
      <input type='text' value={data.stock} className='form-control mb-3 border border-success' placeholder='Stock quantity'
      onChange={(e)=>setData({...data,stock:e.target.value})} />
      <input type='text'  value={data.description}    className='form-control mb-3 border border-success' placeholder='description'
      onChange={(e)=>setData({...data,description:e.target.value})} />
      <div className='justify-content-center  d-flex gap-3'>
       <Link to={'/'}><button onClick={()=>handleupdate(data)} type='button' className='btn bg-success mt-4 text-white' >Update</button></Link>
     
      
        <button onClick={handlecancel} type='button' className='btn bg-success mt-4 text-white '>clear</button>
        </div>
        <div className='justify-content-center  d-flex'>
        <Link to="/"><button className='btn bg-success mt-4 text-white'>Back Home</button></Link> 
        </div>

      </div>
    </div>
    <ToastContainer position='top-center' theme="colored" autoClose={2000}/>

    </div>
  )
}

export default Update
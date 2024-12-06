import React, { useState } from 'react'
import { Link } from 'react-router'
import { addProductsApi } from '../../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Add() {
    const[addProducts,setAddproducts]=useState({
        id:"",
        name:"",
        category:"",
        price:"",
        stock:"",
        description:""
    })
    console.log(addProducts);

  const handleadd=async()=>{
    const {name,category,price,stock,description}=addProducts
    if(!name|| !category|| !price || !stock|| !description){
      toast.warning('please fill the form completely')
    }
    else{



   const result=await addProductsApi(addProducts)
  console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success('product added sucessfully')
      }

    
   
    }
}

  const handlecancel=()=>{
    setAddproducts({
      name:"",
      category:"",
      price:"",
      stock:"",
      description:""
    })
  }





  return (

    <div>
        <h1 className='text-center text-success mt-5'>ADD PRODUCTS</h1>
    <div className='justify-content-center d-flex mt-4'>
        
  
      <div className='border border-success p-5 ' style={{height:480 ,width:400}}>
      <input type='text' value={addProducts.name} className='form-control mb-3 border border-success' placeholder='Name of product' onChange={(e)=>setAddproducts({...addProducts,name:e.target.value})}/>
      <input type='text' value={addProducts.category}  className='form-control mb-3 border border-success' placeholder='category' onChange={(e)=>setAddproducts({...addProducts,category:e.target.value})}/>
      <input type='text' value={addProducts.price}  className='form-control mb-3 border border-success' placeholder='price'onChange={(e)=>setAddproducts({...addProducts,price:e.target.value})} />
      <input type='text' value={addProducts.stock}  className='form-control mb-3 border border-success' placeholder='Stock quantity' onChange={(e)=>setAddproducts({...addProducts,stock:e.target.value})}/>
      <input type='text' value={addProducts.description}  className='form-control mb-3 border border-success' placeholder='description' onChange={(e)=>setAddproducts({...addProducts,description:e.target.value})}/>
      <div className='justify-content-center  d-flex gap-3'>
       <button onClick={handleadd} type='button' className='btn bg-success mt-4 text-white' >submit</button>
     
      
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

export default Add
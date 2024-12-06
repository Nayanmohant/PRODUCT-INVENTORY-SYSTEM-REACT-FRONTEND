import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { getProductsApi, removeProductsApi } from '../../services/allApi'
function Home({setupdateProduct}) {

  const [Product,setProduct]=useState([])

  const [deleteStatus,setDeleteStatus]=useState()


   const getAllproducts=async()=>{

    const result=await getProductsApi()
    console.log(result);
    setProduct(result.data)
    console.log(Product);
    
    
   }

   const handleDelete=async(id)=>{
    const result=await removeProductsApi(id)
    if(result.status>=200 && result.status<300){
      setDeleteStatus(result)
    }
    
    

   }

   const handleEdit=(product)=>{
    setupdateProduct(product)

   }


   


   useEffect(()=>{
      getAllproducts()
   },[deleteStatus])

  return (
    <div>
        <h1 className='text-center text-success mt-5'>PRODUCT INVENTORY SYSTEM</h1>


       <div className='mt-5 container'>
      <Link to="/add"><button className='bg-success text-white btn'>ADD ITEMS +</button></Link>
        </div> 
    <div className='justify-content-center  d-flex table-responsive container mt-3 '>
    <table className='table table-bordered border-success  scrollbar:none'>
        <thead >
          <tr>
            
            <th className='text-success'>Name</th>
            <th className='text-success'>Category</th>
            <th className='text-success'>Price</th>
            <th className='text-success'>Stock</th>
            <th className='text-success'>Description</th>
            <th className='text-success'>Actions</th>
          </tr>
        </thead>
        <tbody>
         
         {Product?.map((item)=>(
           <tr >
              <td className='text-success'>{item.name}</td>
              <td className='text-success'>{item.category}</td>
              <td className='text-success'>{item.price}</td>
              <td className='text-success'>{item.stock}</td>
              <td className='text-success'>{item.description}</td>
              <td className='justify-content-center d-flex '>
                <Link to="/update"><button onClick={()=>handleEdit(item)} className='me-2 md:w-25 bg-success btn text-white' >Edit</button></Link>
                <button onClick={(id)=>handleDelete(item?.id)}  className="ml-2 p-1 md:w-50 bg-success btn text-white">Delete</button>
              </td>
            </tr>
      ))}
        </tbody>
      </table>
    </div>
        </div>
  )
}

export default Home
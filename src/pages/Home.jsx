import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { getProductsApi, removeProductsApi } from '../../services/allApi'
function Home() {

  const [Product,setProduct]=useState([])

  const [deleteStatus,setDeleteStatus]=useState()

  const [records,setrecords]=useState([])

  const {id}=useParams()


   const getAllproducts=async()=>{

    const result=await getProductsApi()
    console.log(result);
    setProduct(result.data)
    setrecords(result.data)
  
    
    
    
   }

   const handleDelete=async(id)=>{
    const result=await removeProductsApi(id)
    if(result.status>=200 && result.status<300){
      setDeleteStatus(result)
    }
    
    

   }

  
        const filter=(e)=>{
          setrecords(Product.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase())))
        }
        

   


   useEffect(()=>{
      getAllproducts()
   },[deleteStatus])

  return (
    <div>
        <h1 className='text-center text-success mt-5'>PRODUCT INVENTORY SYSTEM</h1>

      <div className='d-flex container'>
       <div className='mt-5 container'>
      <Link to="/add"><button className='bg-success text-white btn'>ADD ITEMS +</button></Link>
        </div> 
        <input type='text'  placeholder='search by name' className='form-control container mt-5 w-50 border border-success' onChange={filter}/>

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
         
         {records?.map((item)=>(
           <tr >
              <td className='text-success'>{item.name}</td>
              <td className='text-success'>{item.category}</td>
              <td className='text-success'>{item.price}</td>
              <td className='text-success'>{item.stock}</td>
              <td className='text-success'>{item.description}</td>
              <td className='justify-content-center d-flex '>
                <Link to={`/update/${item.id}`}><button className='me-2 md:w-25 bg-success btn text-white' >Edit</button></Link>
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
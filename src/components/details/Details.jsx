import axios from 'axios'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import {CartContext} from '../../context/CartStore.js'
import toast from 'react-hot-toast';


export default function Details() {
  let { id }=useParams()
  const {addCart} =useContext(CartContext)
  async function addCartFun(productId){
   const dataAdd= await addCart(productId)
   if(dataAdd.status=='success'){
    toast.success(dataAdd.message)
   }
  
  }
  let[productdata,setProduct]=useState({})
  useEffect(()=>{
    getData()
    console.log(productdata)
  },[])
  async function getData() {
    const {data}=await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
    setProduct(data.data)
   
   
  }
 
  return (
    <>   
      <div className='row row align-items-center'>
        <div className='col-md-3'>
          <div>
            <img  src={productdata.imageCover} className="w-100"/>
          </div>
         

        </div>

        <div className='col-md-9'>
            <div>
              <p className='fw-bold'>{productdata.title}</p>
              <p className='text-muted'>{productdata.description}</p>
              <p className='fw-bold my-3'>{productdata.price} EGP</p>
              <button className='btn form-control my-4 bgcolor' onClick={()=>{addCartFun(productdata._id)}}>+Add</button>
            </div>

          </div>

      </div>
    </>
  )
}

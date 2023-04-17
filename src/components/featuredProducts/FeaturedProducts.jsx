import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function FreaturedProducts() {

  let[allProducts,setProducts]=useState([])
   async function getData(){
    const {data} =await axios.get('https://route-ecommerce.onrender.com/api/v1/products')
    setProducts(data.data)
   }
   useEffect(()=>{
    getData()
   },[])
  return (
    <>
       <div className='row mt-5'>
       <h4 className="my-5">Featured Product</h4>
       {
        allProducts.map((ele=><div className='col-md-2' key={ele._id}>
          <div>
          <Link to={`products/${ele._id}`}>
            <img src={ele.imageCover} className='w-100'/>
          </Link>
          <p className='product-text mt-2'>{ele.category.name}</p>
          <p>{ele.title.split(" ").slice(0, 2).join(" ")}</p>
          <div className='d-flex justify-content-between'>
            <span>{ele.price} EGP</span>
            <span>{ele.ratingsAverage} <i className="fas fa-star text-warning"></i></span>

          </div>

          </div>
        </div>))
       }
       </div>
    </>
  )
}

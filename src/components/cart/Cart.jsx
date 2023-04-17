import React, { useContext, useEffect, useState } from 'react'
import {CartContext} from '../../context/CartStore.js'

export default function Cart() {
  const {getCart}= useContext(CartContext)
  let [allCart,setCart]=useState([])
  async function getdataFun(){
    const dataA=await getCart()
    console.log(dataA)
    if(dataA.status==='success'){
      console.log('done')
      setCart(dataA.data.products)
      console.log(allCart)

    }
  }
  useEffect(()=>{
    getdataFun()
    
  },[])
  return (
    <div>
      <div className='row'>
        {allCart.length>0?allCart.map((item,index)=>{
          <div key={index} className='col-md-3'>
            <div>
              <img src={item.product.imageCover}  className='w-100'/>
            </div>
          </div>
        }):<p>loading</p>}
      </div>

    </div>
  )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import style from './categories.module.css'
export default function Categories() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  let [allCat,setCat]=useState([])
  useEffect(()=>{
    getData()
  },[])
  async function getData() {
    const {data}=await axios.get('https://route-ecommerce.onrender.com/api/v1/categories')
     setCat(data.data)
  }
  return (
    <div>
       <Slider {...settings} className='mt-5'>
     {
      allCat.map((ele)=><div key={ele._id}>
        <img src={ele.image} className={style.catImg}/>
        <p className='text-center mt-2'>{ele.name}</p>
      </div>)
     }
      </Slider>
      
    </div>
  )
}

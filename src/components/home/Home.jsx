import React from 'react'
import Header from '../header/Header.jsx'
import Categories from '../categories/Categories'
import FeaturedProducts from '../featuredProducts/FeaturedProducts.jsx'  
export default function Home() {
  return (
    <div>
      <Header></Header>
      <Categories></Categories>
      <FeaturedProducts></FeaturedProducts>
    </div>
  )
}

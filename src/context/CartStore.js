import { createContext, useState } from "react";
import axios from 'axios';


export const CartContext = createContext(0)
export function CartContextProvider({children}) {
    const token=localStorage.getItem('token')
    async function addCart(productId){

        try{
        let obj={
        productId:productId
        }
        const {data}=await axios.post('https://route-ecommerce.onrender.com/api/v1/cart',obj,{
        headers:{
        token
        
        }
        })
        
        return data
        }
        
        catch(error){
        console.log(error)}
    }
   

    async function getCart(){

        try{
       
        const {data}=await axios.get('https://route-ecommerce.onrender.com/api/v1/cart',{
        headers:{
        token
        
        }
        })
        
        return data
        }
        
        catch(error){
        console.log(error)}
    }
    return <CartContext.Provider value={{addCart,getCart}}>
        {children}
    </CartContext.Provider>
}
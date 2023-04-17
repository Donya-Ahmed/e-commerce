import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function Login({userLogin}) {
  const navigate=useNavigate()
  let [err,setError]=useState("")

async  function LoginSubmit(values) {
    try{
    const {data}= await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',values)
    if(data.message=='success'){
      localStorage.setItem('token',data.token)
      userLogin()
      navigate('/cart')
      setError('')
      console.log('sucsee')

    }
    }
    catch(err){
      console.log(err)
      setError(err.response.data.message)
    }

  }
  const schema=Yup.object({
    email:Yup.string().required('Email is requird').email(),
    password:Yup.string().required('password is required').matches(/^[A-Z][a-z]{3,10}@[0-9]{2,5}$/,"pasword not valid"),
  })
  let formik =useFormik({
    initialValues:{
     
      email:'',
      password:'',
     
    },
    validationSchema:schema,
    onSubmit:LoginSubmit
  })
  return (
    <div>
      <form className='my-5' onSubmit={formik.handleSubmit}>
    
        <label htmlFor='email'>Email :</label>
        <input type='email' className='form-control my-2' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.email?<p className='alert alert-danger'>{formik.errors.email}</p>:''}

        <label htmlFor='password'>Password :</label>
        <input type='password' className='form-control my-2' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.password?<p className='alert alert-danger'>{formik.errors.password}</p>:''}

       

        <button className='btn bgcolor'>Login</button>
        {err?<p className='alert alert-danger text-center'>{err}</p>:''}

      </form>
    </div>
  )
}

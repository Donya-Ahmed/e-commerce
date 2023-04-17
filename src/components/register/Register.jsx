import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function Register() {
  const navigate=useNavigate()
  let [err,setError]=useState("")

async  function registerSubmit(values) {
    try{
    const {data}= await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',values)
    if(data.message=='success'){
      navigate('/login')
      setError('')
      console.log('sucsee')

    }
    }
    catch(err){
      console.log(err)
      setError(err.response.data.errors.msg)
    }

  }
  const schema=Yup.object({
    name:Yup.string().required('Name is requird').min(3,'min length is 3 character').max(15,'max length is 15'),
    email:Yup.string().required('Email is requird').email(),
    password:Yup.string().required('password is required').matches(/^[A-Z][a-z]{3,10}@[0-9]{2,5}$/,"pasword not valid"),
    rePassword:Yup.string().required('password is required').oneOf([Yup.ref('password')],'password is not matching'),
    phone:Yup.string().required('phone is requird')
  })
  let formik =useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
    
    },
    validationSchema:schema,
    onSubmit:registerSubmit
  })
  return (
    <div>
      <form className='my-5' onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name :</label>
        <input type='text' className='form-control my-2' name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.name?<p className='alert alert-danger'>{formik.errors.name}</p>:''}
        <label htmlFor='email'>Email :</label>
        <input type='email' className='form-control my-2' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.email?<p className='alert alert-danger'>{formik.errors.email}</p>:''}

        <label htmlFor='password'>Password :</label>
        <input type='password' className='form-control my-2' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.password?<p className='alert alert-danger'>{formik.errors.password}</p>:''}

        <label htmlFor='password'>RePassword :</label>
        <input type='password' className='form-control my-2' name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.rePassword?<p className='alert alert-danger'>{formik.errors.rePassword}</p>:''}

        <label htmlFor='phone'>Phone :</label>
        <input type='text' className='form-control my-2' name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.phone?<p className='alert alert-danger'>{formik.errors.phone}</p>:''}

        <button className='btn bgcolor'>Register</button>
        {err?<p className='alert alert-danger text-center'>{err}</p>:''}

      </form>
    </div>
  )
}

import React from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from 'mdbreact'

export default function FormPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue='test' {...register('example')} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('exampleRequired', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type='submit' />
    </form>
  )
}

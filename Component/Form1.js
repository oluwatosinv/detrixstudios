import React from 'react'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from 'mdbreact'

const FormPage = () => {
  const [statusMessage, setStatusMessage] = useState('Message')

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    const statusMessage = document.querySelector('.status-message')
    const form = document.querySelector('#contact-form')

    emailjs
      .sendForm(
        'service_sjkxywc',
        'template_tdf4cwk',
        '#contact-form',
        'user_M8QeqjwMCrjTmh8dOwrDd'
      )
      .then(
        (result) => {
          console.log(result.text)
          setStatusMessage('Message sent!')
          statusMessage.className = 'status-message success'
          setTimeout(() => {
            statusMessage.className = 'status-message'
          }, 3000)
          setTimeout(window.location.reload(), 60000)
          form.reset()
        },
        (error) => {
          setStatusMessage('Failed to send message! Please try again later.')
          statusMessage.className = 'status-message failure'
          setTimeout(() => {
            statusMessage.className = 'status-message'
          }, 5000)
          console.log(error.text)
        }
      )
  }

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs.sendForm('service_sjkxywc', 'template_tdf4cwk', '#contact-form', 'user_M8QeqjwMCrjTmh8dOwrDd')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // }
  return (
    <MDBContainer>
      <MDBRow className='centering'>
        <MDBCol md='8' className='form-center'>
          <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='h1 text-center mb-4'>GET IN TOUCH</h1>
            <div className='grey-text'>
              <MDBInput
                name='ClientName'
                label='Your name'
                icon='user'
                group
                type='text'
                validate
                error='wrong'
                success='right'
                {...register('ClientName', { required: true })}
              />
              {errors.ClientName?.type === 'required' &&
                'Your  full name is required'}
              <MDBInput
                name='emaill'
                label='Your email'
                icon='envelope'
                group
                type='email'
                validate
                error='wrong'
                success='right'
                {...register('emaill', { required: true })}
              />
              {errors.email?.type === 'required' && 'Your  email is required'}
              <div className='form-select'>
                <i
                  data-test='fa'
                  className='fa fa-tag prefix md-form icon-forms'
                ></i>
                <select
                  className='browser-default custom-select  select-customize'
                  {...register('events')}
                  name='eventss'
                >
                  <option disabled>Select your Event Type</option>
                  <option value='White and Traditional Wedding'>
                    White and Traditional Wedding
                  </option>
                  <option value='Commercial video production'>
                    Commercial
                  </option>
                  <option value='Corporate video production'>Corporate</option>
                  <option value='Court Wedding'>Court Wedding</option>
                  <option value='Business video production'>Business</option>
                  <option value='Introduction'>Introduction</option>
                  <option value='White Wedding'>White Wedding</option>
                  <option value='Marternity'>Marternity</option>
                  <option value='Family'>Family</option>
                  <option value='Uncatergorized'>Uncatergorized</option>
                </select>
              </div>
              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput
                    name='phoneThrough'
                    label='Phone number'
                    icon='phone-alt'
                    group
                    type='tel'
                    validate
                    error='wrong'
                    success='right'
                    {...register('phoneThrough', { required: true })}
                  />
                  {errors.phoneThrough?.type === 'required' &&
                    'Your  phone number is required'}
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput
                    name='heard'
                    label='How did you hear about us'
                    icon='users'
                    group
                    type='text'
                    validate
                    error='wrong'
                    success='right'
                    {...register('heard', { required: false })}
                  />
                </MDBCol>
              </MDBRow>
              <label>Event/shoot Date</label>
              <MDBInput
                name='dayDate'
                icon='calendar'
                group
                type='date'
                validate
                error='wrong'
                success='right'
                {...register('dayDate', { required: false })}
              />

              <MDBInput
                name='message'
                type='textarea'
                rows='2'
                label='Tell us more about your shoot/events'
                icon='pencil-alt'
                success='right'
                {...register('message', { required: false })}
              />
            </div>
            <p className='status-message'>{statusMessage}</p>
            <div className='text-center'>
              <MDBBtn outline color='primary' type='submit' value='send'>
                Send
                <MDBIcon far icon='paper-plane' className='ml-1' />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default FormPage

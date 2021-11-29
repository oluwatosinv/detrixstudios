import React from 'react'
// import emailjs from 'emailjs-com'
import { useState } from 'react'
// import { useForm, Controller } from 'react-hook-form'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from 'mdbreact'

const FormPage = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [eventType, setEventType] = useState('')
  const [date, SetDate] = useState('')
  const [hear, SetHear] = useState('')
  const [message, setMessage] = useState('')

  // async function handleSubmit(e) {
  //   e.preventDefault()

  //   // const formData = {}

  //   // Array.from(e.currentTarget.elements).forEach((field) => {
  //   //   if (!field.name) return
  //   //   formData[field.name] = field.value
  //   // })

  //   await fetch('/api/mail', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: email,
  //       fullname: fullname,
  //       Phone: Phone,
  //       message: message,
  //       eventType: eventType,
  //       date: date,
  //       hear: hear,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'POST',
  //   })
  // }
  //   Form validation state
  const [errors, setErrors] = useState({})

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Send')

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors['email'] = true
      isValid = false
    }
    if (Phone.length <= 0) {
      tempErrors['Phone'] = true
      isValid = false
    }
    if (message.length <= 0) {
      tempErrors['message'] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log('errors', errors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let isValidForm = handleValidation()
    if (isValidForm) {
      setButtonText('Sending')
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          Phone: Phone,
          message: message,
          eventType: eventType,
          date: date,
          hear: hear,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const { error } = await res.json()
      if (error) {
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText('Send')
        console.log(error)
        return
      }
      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText('Send')
      setTimeout(window.location.reload(), 60000)
      form.reset()

      // Reset form fields
      setFullname('')
      setEmail('')
      setMessage('')
      setEventType('')
      setPhone('')
      SetHear('')
      SetDate('')
    }
    console.log(fullname, email, Phone, eventType, date, hear, message)
    // console.log({ key: process.env(SENDGRID_API_KEY) })
  }

  return (
    <MDBContainer>
      <MDBRow className='centering'>
        <MDBCol md='8' className='form-center'>
          <form id='contact-form' onSubmit={handleSubmit}>
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
                onChange={(e) => {
                  setFullname(e.target.value)
                }}
              />
              {errors?.fullname && (
                <p className='text-red-500'>Fullname cannot be empty.</p>
              )}

              <MDBInput
                name='emaill'
                label='Your email'
                icon='envelope'
                group
                type='email'
                validate
                error='wrong'
                success='right'
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              {errors?.email && (
                <p className='text-red-500'>Email cannot be empty.</p>
              )}

              <div className='form-select'>
                <i
                  data-test='fa'
                  className='fa fa-tag prefix md-form icon-forms'
                ></i>
                <select
                  className='browser-default custom-select  select-customize'
                  name='eventss'
                  onChange={(e) => {
                    setEventType(e.target.value)
                  }}
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
                    onChange={(e) => {
                      setPhone(e.target.value)
                    }}
                  />
                  {errors?.Phone && (
                    <p className='text-red-500'>Phone cannot be empty.</p>
                  )}
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
                    onChange={(e) => {
                      SetHear(e.target.value)
                    }}
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
                onChange={(e) => {
                  SetDate(e.target.value)
                }}
              />

              <MDBInput
                name='message'
                type='textarea'
                rows='2'
                label='Tell us more about your shoot/events'
                icon='pencil-alt'
                success='right'
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
              />
              {errors?.message && (
                <p className='text-red-500'>
                  Please add a little detail about your Event
                </p>
              )}
            </div>
            {/* <p className='status-message'>{statusMessage}</p> */}
            <div className='text-center'>
              <MDBBtn outline color='primary' type='submit' value='send'>
                Send
                <MDBIcon far icon='paper-plane' className='ml-1' />
              </MDBBtn>
              <div className='text-left'>
                {showSuccessMessage && (
                  <p className='success'>
                    Thankyou! Your Message has been delivered.
                  </p>
                )}
                {showFailureMessage && (
                  <p className='text-red-500'>
                    Oops! Something went wrong, please try again.
                  </p>
                )}
              </div>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default FormPage

import { MDBContainer, MDBIcon } from 'mdbreact'
import FormPage from '../Component/Form2'

const ContactUs = () => {
  return (
    <MDBContainer>
      <div className='contact-img'>
        <h1 className='contact-tittle-text'>Contact Us</h1>
      </div>
      <FormPage />
      <h2 className='form-text-bottom'>
        Follow us on Instagram: @detrixstudios
      </h2>
    </MDBContainer>
  )
}

export default ContactUs

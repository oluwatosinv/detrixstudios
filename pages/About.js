import { MDBContainer, MDBIcon } from 'mdbreact'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <MDBContainer>
      <h1 className='about-title'>About Us</h1>
      <div className='about-grid'>
        <Image
          className='about-image'
          src='https://res.cloudinary.com/tosin/image/upload/v1622300052/detrix/P1020031-1024x912.jpg'
          width='100%'
          height='100%'
          layout='responsive'
          objectFit='contain'
        />
        <div>
          <h2 className='about-grid-tittle'>
            MY NAME IS FABOADE ANUOLUWAPO, I’M THE CREATIVE DIRECTOR OF DETRIX
            STUDIOS.
          </h2>
          <p>
            At Detrix Studios, we are a young and vibrant team of professional
            Photographers and Cinematographers with a specialty in documenting
            weddings, events, portraits, and documentaries.
          </p>

          <p>
            We have been capturing and preserving the memories of several
            amazing clients since the year 2018
          </p>
          <p>
            We are available to travel to document your special day because we
            believe boundaries cannot hinder our passion.
          </p>

          <p>We would love to hear from you. </p>
          <p>
            <Link href='/ContactUs' className='contact-title about-contact-us'>
              Click here
            </Link>
            to contact us. CHEERS!!!
          </p>
        </div>
      </div>
    </MDBContainer>
  )
}

export default About

import React from 'react'
import Link from 'next/link'
import { MDBContainer, MDBIcon } from 'mdbreact'

const Footer = () => {
  return (
    <MDBContainer className='footer'>
      <div>
        <Link href='/Contact-Us' className='contact-title' passHref>
          <p>CONNECT WITH US</p>
        </Link>
        <div className='footer-icon'>
          <a
            href='https://www.instagram.com/DETRIXSTUDIOS/'
            target='blank'
            className='ftIcon'
          >
            <MDBIcon fab icon='instagram' />
          </a>
          <a
            href='https://web.facebook.com/detrixstudios'
            target='blank'
            className='ftIcon'
          >
            <MDBIcon fab icon='facebook-square' />
          </a>
          <a
            href='https://www.youtube.com/channel/UCAX4PEep5NsHNtrVENvlN0Q'
            target='blank'
            className='ftIcon'
          >
            <MDBIcon fab icon='youtube' />
          </a>
          <a
            href='https://www.linkedin.com/company/detrix-studios/'
            target='blank'
            className='ftIcon'
          >
            <MDBIcon fab icon='linkedin' />
          </a>
        </div>
      </div>
      <div className='inner2'>
        <Link href='/Contact-Us' className='contact-title' passHref>
          <p>Contact US</p>
        </Link>
        <p>plot 33 ayo balogun avenue lagos</p>
        <p>
          <MDBIcon icon='phone-alt' />
          <a href='tel:+23407038124086' className='contact'>
            {' '}
            +23407038124086
          </a>
        </p>
        <p>
          Email:
          <a href='mailto:info@detrixstudios.com' className='contact'>
            info@detrixstudios.com
          </a>
          <br></br>
        </p>
      </div>
    </MDBContainer>
  )
}

export default Footer

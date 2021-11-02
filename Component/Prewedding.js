import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import { photos } from './Photos'
import Image from 'next/image'

const Prewedding = () => {
  return (
    <div className='hello'>
      <SRLWrapper>
        <a href='https://res.cloudinary.com/tosin/image/upload/v1621942911/detrix/lolade%20and%20lanre/P1060545.jpg'>
          <Image
            src='https://res.cloudinary.com/tosin/image/upload/v1621942911/detrix/lolade%20and%20lanre/P1060545.jpg'
            alt='Umbrella'
            width={400}
            height={400}
            srl_gallery_image='true'
          />
        </a>
        <a href='https://res.cloudinary.com/tosin/image/upload/v1621942911/detrix/lolade%20and%20lanre/P1060545.jpg'>
          <Image
            src='https://res.cloudinary.com/tosin/image/upload/v1621942911/detrix/lolade%20and%20lanre/P1060545.jpg'
            alt='Blue sky'
            width={400}
            height={400}
            srl_gallery_image='true'
          />
        </a>
        <a href='https://res.cloudinary.com/tosin/image/upload/v1621942911/detrix/lolade%20and%20lanre/P1060545.jpg'>
          <Image
            src='https://res.cloudinary.com/tosin/image/upload/v1621942911/detrix/lolade%20and%20lanre/P1060545.jpg'
            alt='Blue sky'
            width={400}
            height={400}
            srl_gallery_image='true'
          />
        </a>
        <a href='https://res.cloudinary.com/tosin/image/upload/v1622630298/detrix/_P6A1992.jpg'>
          <Image
            src='https://res.cloudinary.com/tosin/image/upload/v1622630298/detrix/_P6A1992.jpg'
            alt='Blue sky'
            width={400}
            height={400}
            srl_gallery_image='true'
          />
        </a>
      </SRLWrapper>
    </div>
  )
}

export default Prewedding

import React from 'react'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from 'mdbreact'

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={6}
        showControls={true}
        showIndicators={true}
        className='z-depth-1'
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId='1'>
            <MDBView className='muse1'>
              {/* <img
                className="d-block w-100"
                src="https://res.cloudinary.com/tosin/image/upload/v1621792591/detrix/P1120768.jpg"
                alt="Muse"
              /> */}
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='2'>
            <MDBView className='loladeCrew'>
              {/* <img
                className="d-block w-100"
                src="https://res.cloudinary.com/tosin/image/upload/v1621806254/detrix/IMG_7799_2.jpg"
                alt="Second slide"
              /> */}
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='3' className='muse2'>
            <MDBView>
              {/* <img
                className="d-block w-100"
                src="https://res.cloudinary.com/tosin/image/upload/v1621806403/detrix/P1130201.jpg"
                alt="Third slide"
              /> */}
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='4'>
            <MDBView className='chichiCrew'>
              {/* <img
                className="d-block w-100"
                src="https://res.cloudinary.com/tosin/image/upload/v1621804411/detrix/IMG_5801_1.jpg"
                alt="Bridal squard"
              /> */}
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='5'>
            <MDBView className='me'>
              {/* <img
                className="d-block w-100"
                src="https://res.cloudinary.com/tosin/image/upload/v1621806614/detrix/_P6A2009.jpg"
                alt="Bride"
              /> */}
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='6'>
            <MDBView className='muse2b'>
              {/* <img
                className="d-block w-100"
                src="https://res.cloudinary.com/tosin/image/upload/v1621792592/detrix/P1130106.jpg"
                alt="Muse"
              /> */}
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  )
}

export default CarouselPage

import React, { useState, useCallback } from 'react'
import { render } from 'react-dom'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from '../Component/Photos/WeddingPhotos'
import { MDBContainer } from 'mdbreact'

const weddingphotographernigeria = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentImage, setCurrentImage] = useState(0)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  return (
    <MDBContainer>
      <h1 className='ImgGridTittle'>Wedding Photographer Lagos, Nigeria </h1>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </MDBContainer>
  )
}

export default weddingphotographernigeria

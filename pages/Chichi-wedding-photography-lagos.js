import React, { useState, useCallback } from 'react'
import { MDBContainer } from 'mdbreact'
import { render } from 'react-dom'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { ChichiPhotos } from '../Component/Photos/ChichiPhotos'
import ButtonMore from './Button'

function Chichi() {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const openLightbox = useCallback((event, { ChichiPhotos, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <MDBContainer className='galleyLolade'>
      <h1 className='galleryTittle'>Chichi and Davonche</h1>
      <Gallery photos={ChichiPhotos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={ChichiPhotos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <ButtonMore />
    </MDBContainer>
  )
}

export default Chichi

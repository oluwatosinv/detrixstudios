import React, { useState, useCallback } from "react";
import { MDBContainer } from "mdbreact";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { MariamPhotos } from "../Component/Photos/MariamPhotos";
import ButtonMore from "../Component/Button";

function Mariam() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = useCallback((event, { MariamPhotos, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <MDBContainer className="galleyLolade">
      <h1 className="galleryTittle">Mariam and Adeyemi</h1>
      <Gallery photos={MariamPhotos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={MariamPhotos.map((x) => ({
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
  );
}

export default Mariam;

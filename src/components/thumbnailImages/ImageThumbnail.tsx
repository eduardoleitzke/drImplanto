import React, { useState, useEffect } from 'react';
import { Miniature, ModalImage, ModalWrapper, ThumbnailWrapper } from './styles'

interface ImageThumbnailProps {
  images: string[];
}

export function ImageThumbnail({ images }: ImageThumbnailProps){
  console.log(images)
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleImageClick = (index: number): void => {
    setCurrentImage(index);
    setShowModal(true);
  };

  const handlePrevClick = (): void => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleNextClick = (): void => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setShowModal(false);
      } else if (event.key === 'ArrowLeft') {
        handlePrevClick();
      } else if (event.key === 'ArrowRight') {
        handleNextClick();
      }
    };

    if (showModal) {
      document.addEventListener('keydown', handleKeyPress);
    } else {
      document.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [showModal, currentImage]);

  const firstImageStyle = {
    gridRow: '1 / 2',
    gridColumn: '1 / 3',
    width: '90%'
  };
  return (
    <>
      <ThumbnailWrapper>
        {images.length > 0 && (
          <>
            <Miniature
            src={`https://api-drimplanto.s3.sa-east-1.amazonaws.com/images/${images[0]}`}
            alt="thumbnail"
            style={firstImageStyle}
            onClick={() => handleImageClick(0)}
          />
          {images.slice(1).map((image, index) => (
            <Miniature
              key={index + 1}
              src={`https://api-drimplanto.s3.sa-east-1.amazonaws.com/images/${image}`}
              alt="thumbnail"
              onClick={() => handleImageClick(index + 1)}
            />
          ))}
          </>
        )}
        
      </ThumbnailWrapper>
      {showModal && (
        <ModalWrapper onClick={handleCloseModal}>
          <ModalImage src={`https://api-drimplanto.s3.sa-east-1.amazonaws.com/images/${images[currentImage]}`} alt="full-size" />
        </ModalWrapper>
      )}
    </>
  );
}

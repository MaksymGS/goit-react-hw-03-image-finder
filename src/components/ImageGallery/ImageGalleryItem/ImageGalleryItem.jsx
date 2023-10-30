import React from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  // console.log(largeImageURL);
  return (
    <GalleryItem>
      <Image src={webformatURL} alt="" />
    </GalleryItem>
  );
};

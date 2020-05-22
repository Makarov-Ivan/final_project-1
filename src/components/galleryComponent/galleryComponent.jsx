import React, { useState } from "react";

import "./galleryComponent.scss";
import { Photos } from "./galleryPhotos"; //arr

export const GalleryComponent = () => {
  let [index, setIndex] = useState(0);

  return (
    <div className='gallery'>
      <h2 className='gallery__title'>Галлерея</h2>
      <div className='carousel'>
        <button
          className='carousel__BtnLeft'
          onClick={() => {
            setIndex(() => {
              console.log(index);
              return index < 1 ? (index = Photos.length - 1) : index--;
            });
          }}>
          &lt;
        </button>

        <img
          src={Photos[index % (Photos.length - 1)].src}
          alt={index}
          className='carousel__pic'
        />

        <button
          className='carousel__BtnRight'
          onClick={() => {
            setIndex(index + 1);
          }}>
          &gt;
        </button>
      </div>
    </div>
  );
};

import React, { useState } from "react";

import "./card.scss";
import "./cardModal.scss";

export const CardComponent = ({
  serviceImg,
  servicePrice,
  serviceName,
  serviceDescription,
  serviceDescriptionFull,
}) => {
  const [Modal, ModalSet] = useState(["cardModal", "cardModalOverlay"]);
  const bgUrl = {
    backgroundImage: "url(" + serviceImg + ")",
  };
  return (
    <React.Fragment>
      <figure className='card'>
        <div className='card__image' style={bgUrl}>
          <button
            className='card__button'
            onClick={() => {
              ModalSet([
                "cardModal cardModal_active",
                "cardModalOverlay cardModalOverlay_active",
              ]);
            }}>
            просмотр
          </button>
        </div>
        <div className='info'>
          <h5>{serviceName}</h5>
          <p className='price'>{servicePrice}</p>
          <p className='description'>{serviceDescription}</p>
        </div>
      </figure>
      {/* <figure className='card'>
        <img src={serviceImg} alt='' className='card__pic' />
        <button
          className='card__modalButton'
          onClick={() => {
            ModalSet([
              "cardModal cardModal_active",
              "cardModalOverlay cardModalOverlay_active",
            ]);
          }}>
          Просмотр
        </button>
        <figcaption className='card__content'>
          <h5 className='card__title'>{serviceName}</h5>
          <p className='card__price'>{servicePrice}</p>
          <p className='card__description'>{serviceDescription}</p>
        </figcaption>
      </figure> */}
      {/* this is modal window */}
      <div className={Modal[0]}>
        <div className='cardModal__header'>
          <h3 className='cardModal__title'>{serviceName}</h3>
          <p className='cardModal__brend'>Barber</p>
          <button
            className='cardModal__closeButton'
            onClick={() => ModalSet(["cardModal", "cardModalOverlay"])}>
            &times;
          </button>
        </div>
        <div className='cardModal__content'>
          {serviceDescriptionFull ? serviceDescriptionFull : serviceDescription}
        </div>
      </div>
      <div className={Modal[1]}></div>
    </React.Fragment>
  );
};

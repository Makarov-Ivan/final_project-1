import React, { useState } from "react";

import { ModalWindow } from "./cardModal";

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
        <div className='card__info'>
          <h5 className='card__title'>{serviceName}</h5>
          <p className='card__price'>{servicePrice}</p>
          <p className='card__description'>{serviceDescription}</p>
        </div>
      </figure>

      {/* this is modal window */}

      <ModalWindow
        style={Modal}
        title={serviceName}
        descriptionFull={
          serviceDescriptionFull ? serviceDescriptionFull : serviceDescription
        }
        fn={() => ModalSet(["cardModal", "cardModalOverlay"])}
      />
    </React.Fragment>
  );
};

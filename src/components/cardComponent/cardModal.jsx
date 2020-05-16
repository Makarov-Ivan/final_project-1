import React from "react";

import "./cardModal.scss";

//style-arr,
//title-str,
//fn- function for close modal
//

export const ModalWindow = ({ style, title, fn, descriptionFull }) => {
  return (
    <React.Fragment>
      <div className={style[0]}>
        <div className='cardModal__header'>
          <h3 className='cardModal__title'>{title}</h3>
          <p className='cardModal__brend'>Barber</p>
          <button className='cardModal__closeButton' onClick={() => fn()}>
            &times;
          </button>
        </div>
        <div className='cardModal__content'>{descriptionFull}</div>
      </div>
      <div className={style[1]}></div>
    </React.Fragment>
  );
};

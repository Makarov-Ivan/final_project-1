import React, { useContext, useState } from "react";

import "./cardModal.scss";

import { addOrder } from "../../firebase/firebase.utils";

import { ContextUser } from "../../context";
//style-arr,
//title-str,
//fn- function for close modal
//

export const ModalWindow = ({ style, title, fn, descriptionFull }) => {
  const { user } = useContext(ContextUser);
  const [date, setDate] = useState("");
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
        {user ? (
          <form
            className='cardModal__order'
            onSubmit={async (e) => {
              e.preventDefault();
              await addOrder(user, title, date);
            }}>
            <input
              type='date'
              name='data'
              id='data'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <input type='submit' value='Записаться' />
          </form>
        ) : null}
      </div>
      <div className={style[1]}></div>
    </React.Fragment>
  );
};

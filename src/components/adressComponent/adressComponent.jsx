import React from "react";

import "./adressComponent.scss";

export const Adress = () => {
  return (
    <div className='adressBlock'>
      <h3 className='adressBlock__title'>Адрес</h3>
      <a
        href='https://www.google.com/maps/dir/?api=1&destination=Saint+Petersburg'
        rel='noopener noreferrer'
        target='_blank'
        className='adressBlock__button'>
        Проложить маршрут
      </a>
      <p className='adressBlock__adress'>
        Санкт-Петербург
        <br />
        Россия <br />
        190000 <br />
      </p>
    </div>
  );
};

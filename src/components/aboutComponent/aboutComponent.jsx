import React from "react";

import "./aboutComponent.scss";

export const AboutComponent = () => {
  return (
    <div className='aboutComponent'>
      <img
        src='https://lady-rf.ru/wp-content/uploads/2017/06/unnamed-5.jpg'
        alt=''
        className='aboutComponent__pic'
      />
      <h2 className='aboutComponent__title'>О нас</h2>
      <div className='aboutComponent__content'>
        Салон красоты <span>Barber</span> в Санкт-Петербурге, создан в помощь
        поддержанию вашей красоты и ухоженности. Ближайшая станция метро —
        Парнас.Здесь Вам предложат качественные услуги стилистов и все виды
        ухода за волосами: стрижки, укладки, вечерние и свадебные прически. В
        салоне есть солярий и косметологический кабинет.
      </div>
    </div>
  );
};

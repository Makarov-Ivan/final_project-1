import React from "react";

import { Registration } from "../../components/registrationComponent/registrationComponent";
import { Enter } from "../../components/enterComponent/enterComponent";

import "./enterPage.scss";
export const EnterPage = () => {
  return (
    <div className='enterPage'>
      <h2>This is enter page</h2>
      <div className='enterPage__registrationForm'>
        <Registration />
      </div>
      <div className='enterPage__enterForm'>
        <Enter />
      </div>
      <div className='enterPage__aboutRegistration'>
        <h3>Для чего нужна регистрация</h3>
        <p>
          Благодаря регистрации вы сможете записываться и отписываться от услуг,
          получать консультации по времени и услуге по телефону, получать
          рассылку новостоей от <span>Barber</span>
        </p>
      </div>
    </div>
  );
};

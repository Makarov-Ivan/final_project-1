import React from "react";

import "./contactNumber.scss";

export const ContactNumber = () => {
  return (
    <div className='contactNumberBlock'>
      <h3 className='contactNumberBlock__title'>По телефону</h3>
      <a href='tel:+7-999-123-45-67' className='contactNumberBlock__callButton'>
        Позвонить
      </a>
      <p className='contactNumberBlock__number'>+7-999-123-45-67</p>
    </div>
  );
};

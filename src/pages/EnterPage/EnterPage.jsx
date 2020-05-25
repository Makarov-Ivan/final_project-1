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
    </div>
  );
};

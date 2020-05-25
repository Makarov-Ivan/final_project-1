import React from "react";

import { Registration } from "../../components/registrationComponent/registrationComponent";
import { Enter } from "../../components/enterComponent/enterComponent";

export const EnterPage = () => {
  return (
    <div className='enterPage'>
      <h2>This is enter page</h2>
      <Registration />
      <Enter />
    </div>
  );
};

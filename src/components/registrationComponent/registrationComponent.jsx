import React from "react";
import { Input } from "../InputComponent/inputComponent";

import { signIn as arr } from "./Reg";

export const Registration = () => {
  return (
    <React.Fragment>
      <p>this is registration form</p>
      <form
        action=''
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        {arr.map((item, i) => {
          return <Input key={i} {...item} />;
        })}
        <input type='submit' value='Зарегистрироваться' />
      </form>
    </React.Fragment>
  );
};

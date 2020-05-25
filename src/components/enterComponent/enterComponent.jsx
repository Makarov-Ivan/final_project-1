import React from "react";
import { Input } from "../InputComponent/inputComponent";

import { EnterForm } from "./ent";
export const Enter = () => {
  return (
    <React.Fragment>
      this is enter form
      <form
        action=''
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        {EnterForm.map((item, i) => {
          return <Input key={i} {...item} />;
        })}
        <input type='submit' value='Войти' />
      </form>
    </React.Fragment>
  );
};

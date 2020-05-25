import React from "react";
import { Input } from "../InputComponent/inputComponent";

import { EnterForm } from "./ent";
export const Enter = () => {
  return (
    <React.Fragment>
      <h3>Войти</h3>
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

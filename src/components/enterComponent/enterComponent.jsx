import React, { useState } from "react";
import { Input } from "../InputComponent/inputComponent";

import { EnterForm } from "./ent";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

export const Enter = () => {
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");

  const reset = () => {
    setEmail1("");
    setPassword1("");
  };

  return (
    <React.Fragment>
      <h3>Войти</h3>
      <form
        action=''
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await auth.signInWithEmailAndPassword(email1, password1);
            reset();
          } catch (error) {
            console.log(error);
          }
        }}>
        <label htmlFor='email1'>Email</label>
        <input
          type='email1'
          name='email1'
          id='email1'
          value={email1}
          onChange={(e) => {
            setEmail1(e.target.value);
          }}
        />
        <br />

        <label htmlFor='password1'>Password</label>
        <input
          type='password'
          name='password1'
          id='password1'
          value={password1}
          onChange={(e) => {
            setPassword1(e.target.value);
          }}
        />
        <br />
        <input type='submit' value='Войти' />
        <br />
        <input
          type='submit'
          value='Войти с помошью Goolge'
          onClick={signInWithGoogle}
        />
      </form>
    </React.Fragment>
  );
};

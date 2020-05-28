import React, { useState } from "react";

// import { Link } from "react-router-dom";
import {
  auth,
  createUserProfileDocument,
  addNameAndPhoneNumberToUserProfileDoc,
} from "../../firebase/firebase.utils";
import "./registrationComponent.scss";

export const Registration = () => {
  const [name, setName] = useState("");
  const nameChange = ({ target: { value } }) => {
    setName(value);
  };

  const [email, setEmail] = useState("");
  const emailChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const [pass, setPass] = useState("");
  const passChange = ({ target: { value } }) => {
    setPass(value);
  };

  const [tel, setTel] = useState("");
  const telChange = ({ target: { value } }) => {
    setTel(value);
  };

  const reset = () => {
    setEmail("");
    setName("");
    setPass("");
    setTel("");
  };
  return (
    <React.Fragment>
      <h3>Зарегистрироваться</h3>

      <form
        action=''
        onSubmit={async (e) => {
          e.preventDefault();
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            pass
          );
          await createUserProfileDocument(user);
          await addNameAndPhoneNumberToUserProfileDoc(user, name, tel);
          reset();
        }}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e) => {
            emailChange(e);
          }}
        />
        <br />
        <label htmlFor='password'>Пароль</label>
        <input
          type='password'
          name='password'
          id='password'
          value={pass}
          onChange={(e) => {
            passChange(e);
          }}
        />
        <br />
        <label htmlFor='tel'>Телефон</label>
        <input
          type='tel'
          name='tel'
          id='tel'
          value={tel}
          onChange={(e) => {
            telChange(e);
          }}
        />
        <br />
        <label htmlFor='name'>Имя</label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={(e) => {
            nameChange(e);
          }}
        />
        <br />
        {/* <Link to='/'> */}
        <input type='submit' value='Зарегистрироваться' />
        {/* </Link> */}
      </form>
    </React.Fragment>
  );
};

import React, { useState } from "react";

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

  return (
    <React.Fragment>
      <h3>Зарегистрироваться</h3>

      <form
        action=''
        onSubmit={(e) => {
          e.preventDefault();
          console.log(name, email, pass, tel);
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
          type='passwor'
          name='passwor'
          id='passwor'
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
        <input type='submit' value='Зарегистрироваться' />
      </form>
    </React.Fragment>
  );
};

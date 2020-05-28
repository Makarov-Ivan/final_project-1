import React, { useState } from "react";

import { addNameAndPhoneNumberToUserProfileDoc } from "../../firebase/firebase.utils";

export const UserData = ({ user }) => {
  console.log("user data: ", user);

  const [name, setName] = useState(user.displayName ? user.displayName : "");
  const [tel, setTel] = useState(user.phoneNumber ? user.phoneNumber : "");

  return (
    <div className='userData'>
      userdata
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await addNameAndPhoneNumberToUserProfileDoc(user, name, tel);
          alert("Данные сохранены");
        }}>
        <label htmlFor='name'>Имя</label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor='tel'>Телефон</label>
        <input
          type='tel'
          name='tel'
          id='tel'
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <br />
        <input type='submit' value='Сохранить изменения' />
      </form>
    </div>
  );
};

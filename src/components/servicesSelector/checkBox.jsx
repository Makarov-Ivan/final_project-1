import React from "react";

export const CheckBox = ({ onChange, gender, text }) => {
  return (
    <label htmlFor={gender}>
      {text}
      <input
        type='checkbox'
        name={gender}
        id={gender}
        onChange={onChange}
        defaultChecked
      />
    </label>
  );
};

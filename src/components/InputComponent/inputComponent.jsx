import React from "react";
export const Input = ({ label, name, type, value }) => {
  return (
    <div className='input'>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input type={type} name={name} id={name} required />
    </div>
  );
};

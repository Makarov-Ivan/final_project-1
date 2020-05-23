import React from "react";

import "./searchComponent.scss";

export const SearchBox = ({ onChange }) => {
  return (
    <input
      type='text'
      name='search'
      id='search'
      placeholder='Поиск услуги'
      onChange={onChange}
      className='pricePage__searchBox'
    />
  );
};

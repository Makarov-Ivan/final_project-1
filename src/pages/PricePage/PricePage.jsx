import React, { useState } from "react";
import { CardComponent } from "../../components/cardComponent/cardComponent";
import { SearchBox } from "../../components/searchBox/searchComponent";
import { CheckBox } from "../../components/servicesSelector/checkBox";

import { services } from "./services";

import "./PricePage.scss";
export const PricePage = () => {
  const [searchedServs, setSearchedServs] = useState("");
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(true);
  let filteredServs;

  filteredServs = services.filter((item) => {
    return (
      item.serviceName.toLowerCase().includes(searchedServs.toLowerCase()) &&
      (male
        ? female
          ? true
          : item.serviceType === 2
        : female
        ? item.serviceType === 1
        : false)
    );
  });

  return (
    <div className='pricePage'>
      {/* <h2>This is price page</h2> */}
      <div className='pricePage__selectors'>
        <SearchBox
          onChange={(e) => {
            setSearchedServs(e.target.value);
          }}
        />
        <CheckBox
          gender='male'
          text='Мужские'
          onChange={(e) => {
            setMale(e.target.checked);
          }}
        />
        <CheckBox
          gender='female'
          text='Женские'
          onChange={(e) => {
            setFemale(e.target.checked);
          }}
        />
      </div>
      <div className='pricePage__cradList'>
        {filteredServs.map((item, i) => {
          return <CardComponent {...item} key={i} />;
        })}
      </div>
    </div>
  );
};

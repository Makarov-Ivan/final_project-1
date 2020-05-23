import React, { useState } from "react";
import { CardComponent } from "../../components/cardComponent/cardComponent";
import { SearchBox } from "../../components/searchBox/searchComponent";
import { services } from "./services";

import "./PricePage.scss";
export const PricePage = () => {
  const [searchedServs, setSearchedServs] = useState("");

  const filteredServs = services.filter((item) =>
    item.serviceName.toLowerCase().includes(searchedServs.toLowerCase())
  );

  return (
    <div className='pricePage'>
      {/* <h2>This is price page</h2> */}
      <SearchBox
        onChange={(e) => {
          setSearchedServs(e.target.value);
        }}
      />
      <div className='pricePage__cradList'>
        {filteredServs.map((item, i) => {
          return <CardComponent {...item} key={i} />;
        })}
      </div>
    </div>
  );
};

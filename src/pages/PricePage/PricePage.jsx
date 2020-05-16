import React from "react";
import { CardComponent } from "../../components/cardComponent/cardComponent";

import { services } from "./services";

export const PricePage = () => {
  return (
    <div className='pricePage'>
      <h2>This is price page</h2>
      {services.map((item) => {
        return <CardComponent {...item} />;
      })}
    </div>
  );
};

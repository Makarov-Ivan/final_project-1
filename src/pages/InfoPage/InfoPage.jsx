import React, { useContext } from "react";
import { VisitingCard } from "../../components/visitingCard/visitingCard";

import { Context } from "../../App";

export const InfoPage = () => {
  const { staff } = useContext(Context);
  console.log(staff);
  return (
    <div className='infoPage'>
      <h2>Наши мастера</h2>
      {staff.map((item, i) => {
        return <VisitingCard {...item} key={i} />;
      })}
    </div>
  );
};

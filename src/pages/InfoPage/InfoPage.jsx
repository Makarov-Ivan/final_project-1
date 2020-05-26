import React, { useContext } from "react";
import { VisitingCard } from "../../components/visitingCard/visitingCard";
import { MapComponent } from "../../components/siteMapComponent/mapComponent";

import { ContextStaff } from "../../context";

export const InfoPage = () => {
  const { staff } = useContext(ContextStaff);
  console.log(staff);
  return (
    <div className='infoPage'>
      <h2>Наши мастера</h2>
      {staff.map((item, i) => {
        return <VisitingCard {...item} key={i} />;
      })}
      <MapComponent />
    </div>
  );
};

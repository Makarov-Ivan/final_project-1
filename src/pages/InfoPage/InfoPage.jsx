import React, { useState, useEffect } from "react";
import { VisitingCard } from "../../components/visitingCard/visitingCard";
import { staffSpec } from "./staffSpec";

export const InfoPage = () => {
  let [staff, setStaff] = useState([]);
  useEffect(() => {
    fetch(
      "https://randomuser.me/api/?results=" +
        staffSpec.length +
        "&gender=female&nat=US"
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setStaff(results);
      })
      .catch((err) => console.log(err));
  }, []);
  staff.forEach((item, i) => (item.spec = staffSpec[i]));
  console.log(staff);
  return (
    <div className='infoPage'>
      <h2>Наши мастера</h2>
      {staff.map((item, i) => {
        return (
          <VisitingCard {...item} key={i} />
          // <li key={i}>
          //   {item.name.first}
          //   {item.name.last}
          //   <p>{staffSpec[i]}</p>
          //   <img src={item.picture.medium} alt={item.name.first} />
          // </li>
        );
      })}
    </div>
  );
};

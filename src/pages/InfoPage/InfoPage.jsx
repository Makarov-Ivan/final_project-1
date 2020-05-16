import React, { useState, useEffect } from "react";

export const InfoPage = () => {
  let [staff, setStaff] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5&gender=female&nat=US")
      .then((res) => res.json())
      .then(({ results }) => {
        setStaff(results);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(staff);

  return (
    <div className='infoPage'>
      <h2>This is info page</h2>
      <ul>
        {staff.map((item, i) => {
          return (
            <li key={i}>
              {item.name.first}
              {item.name.last}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

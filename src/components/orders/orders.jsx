import React, { useState, useEffect } from "react";

import { getOrders } from "../../firebase/firebase.utils";

export const Orders = ({ user }) => {
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    setOrder(getOrders(user));
  }, [user]);

  console.log(orders);
  return (
    <React.Fragment>
      Забронированные услуги
      <ul>{}</ul>
    </React.Fragment>
  );
};

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ContextUser } from "../../context";

import { MapComponent } from "../../components/siteMapComponent/mapComponent";
import { UserData } from "../../components/userData/userDataComponent";
import { Orders } from "../../components/orders/orders";

import { auth } from "../../firebase/firebase.utils";

export const Personal = () => {
  const { user } = useContext(ContextUser);
  if (user) {
    console.log(user);
  }
  return (
    <React.Fragment>
      <div className='PersonalPage'>
        <h2>This is personal page</h2>
        <UserData user={user} />
        <Orders user={user} />
        <Link to='/'>
          <button onClick={() => auth.signOut()}>выйти</button>
        </Link>
      </div>
      <MapComponent />
    </React.Fragment>
  );
};

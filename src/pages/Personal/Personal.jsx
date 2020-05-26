import React from "react";
import { Link } from "react-router-dom";

import { MapComponent } from "../../components/siteMapComponent/mapComponent";

import { auth } from "../../firebase/firebase.utils";

export const Personal = () => {
  return (
    <React.Fragment>
      <div className='PersonalPage'>
        <h2>This is personal page</h2>
        <Link to='/'>
          <button onClick={() => auth.signOut()}>выйти</button>
        </Link>
      </div>
      <MapComponent />
    </React.Fragment>
  );
};

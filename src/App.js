import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ContextStaff, ContextUser } from "./context";

import Navbar from "./components/navbar/Navbar";
import { Main } from "./components/main/Main";

import { staffSpec } from "./pages/InfoPage/staffSpec";

import { auth } from "./firebase/firebase.utils";

function App() {
  let [staff, setStaff] = useState([]);
  let [user, setUser] = useState(null);

  //fetch staff list
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

  //sign in with google
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  //add some data to staff list
  staff.forEach((item, i) => (item.spec = staffSpec[i]));

  //logging user
  useEffect(() => console.log(user), [user]);

  return (
    <ContextUser.Provider value={{ user }}>
      <ContextStaff.Provider value={{ staff }}>
        <React.Fragment>
          <Router>
            <Navbar />
            <Main />
          </Router>
        </React.Fragment>
      </ContextStaff.Provider>
    </ContextUser.Provider>
  );
}
export default App;

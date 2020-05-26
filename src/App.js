import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ContextStaff } from "./context";

import Navbar from "./components/navbar/Navbar";
import { Main } from "./components/main/Main";

import { staffSpec } from "./pages/InfoPage/staffSpec";

function App() {
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

  return (
    <ContextStaff.Provider value={{ staff }}>
      <React.Fragment>
        <Router>
          <Navbar />
          <Main />
        </Router>
      </React.Fragment>
    </ContextStaff.Provider>
  );
}
export default App;

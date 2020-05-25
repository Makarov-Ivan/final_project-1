import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import { Main } from "./components/main/Main";

import { staffSpec } from "./pages/InfoPage/staffSpec";

export const Context = React.createContext();
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
    <Context.Provider value={{ staff }}>
      <React.Fragment>
        <Router>
          <Navbar />
          <Main />
        </Router>
      </React.Fragment>
    </Context.Provider>
  );
}
export default App;

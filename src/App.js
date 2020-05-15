import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import { Main } from "./components/main/Main";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Main />
      </Router>
    </React.Fragment>
  );
}
export default App;

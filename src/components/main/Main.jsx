import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { ContextPath } from "../../context";

import { HomePage } from "../../pages/HomePage/HomePage";
import { NewsPage } from "../../pages/NewsPage/NewsPage";
import { InfoPage } from "../../pages/InfoPage/InfoPage";
import { PricePage } from "../../pages/PricePage/PricePage";
import { ContactPage } from "../../pages/ContactsPage/ContactPage";
import { EnterPage } from "../../pages/EnterPage/EnterPage";
import { Personal } from "../../pages/Personal/Personal";
import { NotFound } from "../../pages/NotFound/NotFound";
import "./main.scss";

export const Main = () => {
  const { pathname } = useLocation();

  return (
    <ContextPath.Provider value={{ pathname }}>
      <main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/info' component={InfoPage} />
          <Route path='/news' component={NewsPage} />
          <Route path='/price' component={PricePage} />
          <Route path='/contacts' component={ContactPage} />
          <Route path='/enter' component={EnterPage} />
          <Route path='/personal' component={Personal} />

          <Route component={NotFound} />
        </Switch>
      </main>
    </ContextPath.Provider>
  );
};

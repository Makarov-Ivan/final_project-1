import React from "react";
import { Switch, Route } from "react-router-dom";

import { HomePage } from "../../pages/HomePage/HomePage";
import { NewsPage } from "../../pages/NewsPage/NewsPage";
import { InfoPage } from "../../pages/InfoPage/InfoPage";
import { PricePage } from "../../pages/PricePage/PricePage";
import { ContactPage } from "../../pages/ContactsPage/ContactPage";
import { EnterPage } from "../../pages/EnterPage/EnterPage";
import { NotFound } from "../../pages/NotFound/NotFound";
import "./main.scss";

export const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/info' component={InfoPage} />
        <Route path='/news' component={NewsPage} />
        <Route path='/price' component={PricePage} />
        <Route path='/contacts' component={ContactPage} />
        <Route path='/enter' component={EnterPage} />

        <Route component={NotFound} />
      </Switch>
    </main>
  );
};

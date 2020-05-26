import React from "react";

import "./ContactPage.scss";

import { MapComponent } from "../../components/mapComponent/googleMapComponent";
import { ContactNumber } from "../../components/contactNumberComponent/contactNumberComponent";
import { Adress } from "../../components/adressComponent/adressComponent";
import { Schedule } from "../../components/scheduleComponent/scheduleComponent";
import { MapComponent as SiteMap } from "../../components/siteMapComponent/mapComponent";

export const ContactPage = () => {
  return (
    <React.Fragment>
      <div className='contactPage'>
        <h2>This is contact page</h2>
        <MapComponent />
        <ContactNumber />
        <Adress />
        <Schedule />
      </div>
      <SiteMap />
    </React.Fragment>
  );
};

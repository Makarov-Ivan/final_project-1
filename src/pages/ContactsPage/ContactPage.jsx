import React from "react";

import { MapComponent } from "../../components/mapComponent/googleMapComponent";
import { ContactNumber } from "../../components/contactNumberComponent/contactNumberComponent";
import { Adress } from "../../components/adressComponent/adressComponent";
export const ContactPage = () => {
  return (
    <div className='contactPage'>
      <h2>This is contact page</h2>
      <MapComponent />
      <ContactNumber />
      <Adress />
    </div>
  );
};

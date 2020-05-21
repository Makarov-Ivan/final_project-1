import React from "react";
import { MapComponentItem } from "../mapComponentItem/mapComponentItem";

import { NavbarContent } from "../navbar/navbarContent";

import "./mapComponent.scss";

export const MapComponent = () => {
  return (
    <div className='siteMap'>
      <h2 className='siteMap__header'>Карта сайта</h2>
      <ul className='siteMap__list'>
        {NavbarContent.map(
          ({ content: title, additional: content, link: url }, i) => {
            return (
              <MapComponentItem
                key={i}
                title={title}
                content={content}
                url={url}
              />
            );
          }
        )}
      </ul>
    </div>
  );
};

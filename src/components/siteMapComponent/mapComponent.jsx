import React, { useContext } from "react";
import { MapComponentItem } from "../siteMapComponentItem/mapComponentItem";

import { NavbarContent } from "../navbar/navbarContent";

import "./mapComponent.scss";

import { ContextUser } from "../../context";

export const MapComponent = () => {
  let { user } = useContext(ContextUser);
  return (
    <div className='siteMap'>
      <h2 className='siteMap__header'>Карта сайта</h2>
      <ul className='siteMap__list'>
        {NavbarContent.map(
          ({ content: title, additional: content, link: url }, i) => {
            if (user && url === "/enter") {
              return (
                <MapComponentItem
                  key={i}
                  title='личный кабинет'
                  content={content}
                  url='/personal'
                />
              );
            } else {
              return (
                <MapComponentItem
                  key={i}
                  title={title}
                  content={content}
                  url={url}
                />
              );
            }
          }
        )}
      </ul>
    </div>
  );
};

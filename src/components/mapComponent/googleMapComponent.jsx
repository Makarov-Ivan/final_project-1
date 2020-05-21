import React from "react";
import Iframe from "react-iframe";

export const MapComponent = () => {
  return (
    <Iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511624.09563414333!2d29.534264150755607!3d59.93991383834162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LM!5e0!3m2!1sru!2sru!4v1590061381896!5m2!1sru!2sru'
      width='100%'
      height='450'
      style={{ border: 0, outline: "none" }}
      allowfullscreen=''
      aria-hidden='false'
      tabindex='0'
      frameBorder='0'
    />
  );
};

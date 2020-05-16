import React from "react";
import "./visitingCard.scss";

export const VisitingCard = ({
  name: { first, last },
  picture: { large },
  cell,
  spec,
}) => {
  return (
    <div className='visitingCard'>
      <img src={large} alt='' className='visitingCard__photo' />
      <h4 className='visitingCard__name'>{`${first} ${last}`}</h4>
      <p className='visitingCard__specialization'>{spec}</p>
      <p className='visitingCard__phoneNumber'>{cell}</p>
      <p className='visitingCard__text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi.
      </p>
    </div>
  );
};

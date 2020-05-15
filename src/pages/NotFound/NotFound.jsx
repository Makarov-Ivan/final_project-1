import React from "react";

import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className='notFound'>
      <h2>Данная страница не найдена</h2>
      <Link to='/'>На главную</Link>
    </div>
  );
};

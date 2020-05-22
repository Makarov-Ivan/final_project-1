import React from "react";

import "./scheduleComponent.scss";

const week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

export const Schedule = () => {
  return (
    <div className='scheduleBlock'>
      <h3 className='scheduleBlock__title'>Режим работы</h3>
      <ul className='scheduleBlock__list'>
        {week.map((day, i) => {
          return (
            <li key={i} className='scheduleBlock__item'>
              {day} 10:00–22:00
            </li>
          );
        })}
      </ul>
    </div>
  );
};

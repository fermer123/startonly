import React from 'react';
import style from './Years.module.scss';
import {useCustomContext} from '../context/Context';

const Years: React.FC = () => {
  const {data, year, rotate, rot} = useCustomContext();

  return (
    <div className={style.years_container}>
      {data.map((e) =>
        e.id === year ? (
          <div className={style.years} key={e.id}>
            <p className={style.years_startDate}>{e.startDate}</p>
            <p className={style.years_endDate}>{e.endDate}</p>
          </div>
        ) : null,
      )}

      <ul
        style={{
          transform: `rotate(${rotate}deg)`,
          translate: '0% -345px',
        }}>
        {data.map((e, idx) => (
          <li
            className={
              rotate === idx * 90
                ? style.years_text + ' ' + style.years_active
                : style.years_text
            }
            key={e.id}
            style={{
              transform: `rotate(${-rotate}deg)`,
              translate: '50% -50%',
            }}
            onClick={() => {
              rot(idx);
            }}>
            {rotate === idx * 90 ? (
              <div className={style.years_active}>
                <p className={style.years_active_number}>{e.id}</p>
                <p className={style.years_active_title}>{e.title}</p>
              </div>
            ) : (
              <span>{e.id}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Years;

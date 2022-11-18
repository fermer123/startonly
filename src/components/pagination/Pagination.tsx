import React from 'react';
import { useCustomContext } from '../context/Context';
import style from './Pagination.module.scss';

const Pagination = () => {
  const { data, year, rot } = useCustomContext();

  return (
    <div className={style.pagination_container}>
      <div className={style.pageCount}>
        {year}/{data.length}
      </div>
      <div className={style.pageCount_btn_group}>
        <button
          onClick={() => (year <= 1 ? year : rot(year - 2))}
          className={style.pageCount_btn}
        >
          &lt;
        </button>
        <button
          onClick={() => (year >= 4 ? year : rot(year))}
          className={style.pageCount_btn}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
export default Pagination;

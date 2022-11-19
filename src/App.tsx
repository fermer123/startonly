import React, { useEffect } from 'react';
import Slide from './components/slides/Slide';
import Header from './components/Header/Header';
import Pagination from './components/pagination/Pagination';
import Years from './components/Years/Years';
import style from './index.scss';

const App: React.FC = () => {
  const matchMedia = window.matchMedia('(max-width: 500px)').matches;
  // window.addEventListener('resize',);

  return (
    <div className={style.container}>
      <Header />
      <Years />
      {matchMedia ? (
        <>
          <Slide />
          <Pagination />
        </>
      ) : (
        <>
          <Pagination />
          <Slide />
        </>
      )}
    </div>
  );
};

export default App;

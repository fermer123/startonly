import React from 'react';
import Header from './components/Header/Header';
import Pagination from './components/pagination/Pagination';
import Years from './components/Years/Years';
import style from './index.module.scss';

const App: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <Years />
      <Pagination />
    </div>
  );
};

export default App;

import React from 'react';
import Slide from './components/slides/Slide';
import Header from './components/Header/Header';
import Pagination from './components/pagination/Pagination';
import Years from './components/Years/Years';
import style from './index.scss';

const App: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <Years />
      <Pagination />
      <Slide />
    </div>
  );
};

export default App;

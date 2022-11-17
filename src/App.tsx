import React from 'react';
import Header from './components/Header/Header';
import Pagination from './components/pagination/Pagination';
import Years from './components/Years/Years';
import './index.scss';

const App: React.FC = () => {
  return (
    <div className='container'>
      <Header />
      <Years />
      <Pagination />
    </div>
  );
};

export default App;

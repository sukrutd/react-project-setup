import React from 'react';
import Linter from './Linter';
import './styles/app.scss';

const App = () => {
  return (
    <div className='container'>
      <h1>React Setup with Webpack and Babel</h1>
      <Linter />
    </div>
  );
};

export default App;

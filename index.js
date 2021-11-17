import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import MyHeader from './components/MyHeader';
import Main from './components/Main';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div>
      <MyHeader />
      <Main />
      <MyFooter />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';

function MyHeader() {
  return (
    <header className="mystyle">
      <p>Good!</p>
      <p>WELCOME TO MY PAGE</p>
    </header>
  );
}

function Main() {
  return (
    <div>
      <h2>Ifeanyi Omeata</h2>
      <p>I am a Software Developer and Cloud Engineer.</p>
      <p>My top 3 front-end tools are:</p>
      <ol>
        <li>React</li>
        <li>Angularjs</li>
        <li>Vuejs</li>
      </ol>
    </div>
  );
}

function MyFooter() {
  return <small>Copyright &copy; 2021. Ifeanyi Omeata.</small>;
}

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

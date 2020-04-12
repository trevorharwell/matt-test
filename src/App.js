import React from 'react';
import { Button } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';

function MyComponent() {
    return (
        <div>
            hello world from my component

            alskdfj


            alsdkfjlskdf
        </div>
    );
}

function App() {
  const myStyles = { color: 'black', background: 'blue' };
  const userName = 'matt';
  const [loading, setLoading] = React.useState(true);

  function onClickHandler() {
      setLoading(false);
  }


  return (
    <div className="App" style={myStyles}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {loading ? 'Loading...' : userName}
        </p>
        <Button color="primary" onClick={onClickHandler}>Click Me</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

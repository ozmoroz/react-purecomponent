import * as React from 'react';
import ReactDOM from 'react-dom';
import LightBox from './lightbox';

import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <LightBox />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

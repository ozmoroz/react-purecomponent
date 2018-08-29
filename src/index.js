import * as React from 'react';
import ReactDOM from 'react-dom';
import LightBox from './lightbox';
import SameStateExample from './same_state';

import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>An ordinary class-based component vs PureComponent</h1>
      <LightBox />
      <SameStateExample />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

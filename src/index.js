import * as React from 'react';
import ReactDOM from 'react-dom';
import LightBox from './lightbox';
import SameStateExample from './same_state';

import './styles.css';

function App() {
  return (
    <div className="container App">
      <h1>An ordinary class-based component vs PureComponent</h1>
      <LightBox />
      <SameStateExample />
      <h2>To learn more</h2>
      <div className="component-wrapper">
        <div>
          about <code>PureComponent</code> read my article{' '}
          <a href="https://ozmoroz.com/2018/09/what-is-purecomponent/">
            What is React.PureComponent and when to use it
          </a>
        </div>
        <h2>Other helpful React tips:</h2>
        <ul className="list-unstyled">
          <li>
            <a href="https://ozmoroz.com/2018/08/react-functional-vs-class-components/">
              What is the difference between functional and class-based React
              components?
            </a>
          </li>
          <li>
            <a href="https://ozmoroz.com/2018/07/pass-value-to-onclick-react/">
              How to pass a value to <code>onClick</code> event handler in
              React.js
            </a>
          </li>
          <li>
            <a href="https://ozmoroz.com/2018/11/why-my-setstate-doesnt-work/">
              Why my <code>setState</code> doesn’t work?
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

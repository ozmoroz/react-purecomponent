import * as React from 'react';
import ReactDOM from 'react-dom';

/*
 * A class-based component. Re-renders every time setState is called
 * even if the state remains the same.
 */

class SameStateComp extends React.Component {
  renders = 0;
  state = {
    color: 'LightGreen'
  };

  // "Set state" onClick handler
  // Calls setState initiating re-rendering cycle even though the state doesn't change
  handleSetStateClick = () => {
    this.setState({ color: 'LightGreen' });
  };

  render() {
    this.renders += 1;
    return (
      <div
        className="component-wrapper"
        style={{ backgroundColor: this.state.color }}
      >
        <div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.handleSetStateClick}
          >
            Set state
          </button>
        </div>
        The current state is:
        <ul>
          {Object.keys(this.state).map(key => (
            <li key={key}>
              {key}: {this.state[key]}
            </li>
          ))}
        </ul>
        <div>Component rendered {this.renders} times</div>
      </div>
    );
  }
}

/*
 * A PureComponent. Skips re-rendering on setState if the state doesn't change.
 */

class SameStatePure extends React.PureComponent {
  renders = 0;
  state = {
    color: 'Yellow'
  };

  // "Set state" onClick handler
  // Calls setState. However, re-rendering doesn't happen because the state remains the same.
  handleSetStateClick = () => {
    this.setState({ color: 'Yellow' });
  };

  render() {
    this.renders += 1;
    return (
      <div
        className="component-wrapper"
        style={{ backgroundColor: this.state.color }}
      >
        <div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.handleSetStateClick}
          >
            Set state
          </button>
        </div>
        The current state is:
        <ul>
          {Object.keys(this.state).map(key => (
            <li key={key}>
              {key}: {this.state[key]}
            </li>
          ))}
        </ul>
        <div>Component rendered {this.renders} times</div>
      </div>
    );
  }
}

const SameStateExample = () => (
  <div>
    <h2>Re-rendering on setState</h2>
    <h3>Class-based component</h3>
    <p className="text-left">
      An ordinary class-based component re-renders on setState even if the state
      remains the same.
    </p>
    <SameStateComp />
    <h3>PureComponent</h3>
    <p className="text-left">
      PureComponent skips re-rendering if the state does not change. However,
      that only works if the top-level elements of the state are immutable.{' '}
      <span style={{ color: 'red' }}>
        Using a mutable state in PureComponent may lead to unpredictable
        results.
      </span>
    </p>
    <SameStatePure />
  </div>
);

export default SameStateExample;

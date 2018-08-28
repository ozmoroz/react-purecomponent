import * as React from 'react';
import ReactDOM from 'react-dom';

/*
 * Outer component. Clicking on the button changes state,
 * causing all child components to re-render
 */

class LightBox extends React.Component {
  // The outer component's state.
  // If we call setState on it, it will initiate re-rendering
  // for this component and all child components.
  state = {
    color: 'LightGreen'
  };

  // "Change color" onClick handler
  // Calls setState initiating re-rendering cycle
  handleChangeColorClick = () => {
    if (this.state.color === 'LightGreen') this.setState({ color: 'Yellow' });
    else this.setState({ color: 'LightGreen' });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleChangeColorClick}>
          Change color (outer state)
        </button>
        <div style={{ backgroundColor: this.state.color }}>
          <h2>Function-based inner component</h2>
          <InnerFuncComponent text="1 + 1 = 2" />
          <h2>Class-based inner component</h2>
          <InnerComponent text="1 + 1 = 2" />
          <h2>Pure inner component</h2>
          <PureInnerComponent text="1 + 1 = 2" />
        </div>
      </div>
    );
  }
}

/*
 * Inner function-based component.
 * Re-renders every time even if props are the same.
 */

let funcComponentRenders = 0;

const InnerFuncComponent = props => {
  funcComponentRenders += 1;
  return (
    <div>
      <div>{props.text}</div>
      <div>Inner component rendered {funcComponentRenders} times</div>
    </div>
  );
};

/*
 * Inner class-based component.
 * Re-renders every time even if props are the same.
 */

class InnerComponent extends React.Component {
  renders = 0;
  render() {
    this.renders += 1;
    return (
      <div>
        <div>{this.props.text}</div>
        <div>Inner component rendered {this.renders} times</div>
      </div>
    );
  }
}

/*
 * Pure inner component.
 * Does not re-render if props don't change.
 */

class PureInnerComponent extends React.PureComponent {
  renders = 0;
  render() {
    this.renders += 1;
    return (
      <div>
        <div>{this.props.text}</div>
        <div>Inner component rendered {this.renders} times</div>
      </div>
    );
  }
}

export default LightBox;

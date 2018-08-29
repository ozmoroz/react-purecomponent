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
        <h2>Re-rendering on parent component&apos;s re-render</h2>
        <div>
          <p>
            This example demonstrates the difference in behaviour between a
            function-based component, an ordinary class-based component and a
            PureComponent when their parent component is re-rendered.
          </p>
          <p className="text-left">
            Here are two components: an outer component and an inner component.
            When the outer component&apos;s state is updated, it triggers
            re-rendering of itself as well as all of its child components. Any
            function-based and class-based child component re-render{' '}
            <strong>even if their props are the same</strong>.
          </p>
          <p className="text-left">
            However, a PureComponent does not re-render unless its props change.
            However, that only works if the props are immutable.{' '}
            <span style={{ color: 'red' }}>
              Using mutable props with a PureComponent may lead to unpredictable
              results
            </span>
            .
          </p>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={this.handleChangeColorClick}
        >
          Change color (outer component&apos;s state)
        </button>
        <div
          className="component-wrapper"
          style={{ backgroundColor: this.state.color }}
        >
          <h3>Function-based inner component</h3>
          <InnerFuncComponent text="1 + 1 = 2" />
          <h3>Class-based inner component</h3>
          <InnerComponent text="1 + 1 = 2" />
          <h3>Pure inner component</h3>
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
    <div className="component-container">
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
      <div className="component-container">
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
      <div className="component-container">
        <div>{this.props.text}</div>
        <div>Inner component rendered {this.renders} times</div>
      </div>
    );
  }
}

export default LightBox;

import React, { Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button>button</Button>
        <hr />
        <LabelHOC>label</LabelHOC>
      </div>
    );
  }
}

/**
 * Higher order components will allow you to apply behaviors
 * to multiple React components. This can be done by passing
 * the state and any functions into components as props.
 *
 */
const HOC = (InnerComponent) => class extends Component {
  constructor() {
    super();
    this.state = {count: 0}
  }

  update(e) {
    this.setState({
      count: this.state.count+1
    });
  }

  componentWillMount() {
    console.log('will mount');
  }

  render() {
    return (
      <InnerComponent
        {...this.props}
        {...this.state}
        update={this.update.bind(this)}>
      </InnerComponent>
    );
  }
}

const Button = HOC((props) =>
  <button onClick={props.update}>
    {props.children} - {props.count}</button>)


class Label extends Component {
  componentWillMount() {
    console.log('label will mount');
  }

  render() {
    return (
      <label onMouseMove={this.props.update}>
        {this.props.children} - {this.props.count}
      </label>
    );
  }
}


/**
 * Compose React Component Behavior with Higher Order Components
 *
 */
const LabelHOC = HOC(Label)

export default App;

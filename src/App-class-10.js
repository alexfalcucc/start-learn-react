import React, { Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {a: ''}
  }

  update(e) {
    this.setState({
      a: this.a.refs.input.value,
      b: this.b.value,
    });
  }

  render() {
    return (
      <div>
        <Input
          ref={component => { this.a = component; }}
          update={this.update.bind(this)}
        /> {this.state.a}
        <hr />
        <input
          ref={node => { this.b = node; }}
          type="text"
          onChange={this.update.bind(this)}
        /> {this.state.b}
      </div>
    );
  }
}

class Input extends Component {
  render() {
    return (
      <div>
        <input
          ref="input"
          type="text"
          onChange={this.props.update}
        />
      </div>
    );
  }
}

export default App;

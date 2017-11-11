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
      <h1>Hey there</h1>
    );
  }
}

export default App;

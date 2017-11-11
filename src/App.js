import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

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
      <div className={styles.base}>

      </div>
    );
  }
}

export default App;

import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <Parent>
        <div className="childA"></div>
        {/* <div className="childB"></div> */}
        {/* <div className="childC"></div> */}
        {/* <div className="childD"></div> */}
      </Parent>
    );
  }
}

class Parent extends Component {
  render() {
    // let items = React.Children.map(
    //   this.props.children,
    //   child => child
    // )
    //
    // let items = React.Children.toArray(
    //   this.props.children
    // )
    //
    // let items = React.Children.forEach(
    //   this.props.children, child => {
    //     console.log(
    //       child.props.className
    //     );
    // });
    let items = React.Children.only(
      this.props.children
    )
    console.log('items: ', items);

    return (
      null
    );
  }
}

export default App;

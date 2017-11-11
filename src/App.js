import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'thi is the state txt'
    }
  }

  update(e) {
    this.setState({
      txt: e.target.value
    });
  }

  render() {
    let txt = this.props.txt
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}

export default App

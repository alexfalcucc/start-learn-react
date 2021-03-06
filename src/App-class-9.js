import React, { Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentEvent: 'No events'
    }
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({
      currentEvent: e.type
    });
  }

  render() {
    return (
      <div>
        <textarea
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onTouchStart={this.update}
          onTouchMove={this.update}
          onTouchEnd={this.update}
          rows="8"
          cols="40"></textarea>
        <h1>{this.state.currentEvent}</h1>
      </div>
      );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  render() {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          onEnter={(el) => {el.style.color = 'blue'}}
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }

  handleToggle() {
    this.setState(() => {
      return { show: !this.state.show }
    })
  }
}

export default App;
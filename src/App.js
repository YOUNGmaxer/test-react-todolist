import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      list: []
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
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
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  in={this.state.show}
                  timeout={1000}
                  classNames="fade"
                  unmountOnExit
                  onEnter={(el) => {el.style.color = 'blue'}}
                  appear={true}
                  key={index}
                >
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleToggle}>toggle</button>
        <button onClick={this.handleAdd}>add</button>
      </Fragment>
    )
  }

  handleToggle() {
    this.setState(() => {
      return { show: !this.state.show }
    });
  }

  handleAdd() {
    this.setState(() => {
      return { list: [...this.state.list, 'item'] }
    });
  }
}

export default App;
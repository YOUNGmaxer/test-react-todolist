import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // 当一个组件要从父组件接受参数；
  // 如果这个组件第一次存在于父组件中，不会执行
  // 如果这个组件已经存在于父组件中，才会被执行
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps');
  }

  // 当组件即将被从页面中清除时，会被执行
  componentWillUnmount() {
    console.log('child componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log('child render');
    const { content } = this.props;
    return (
      <li onClick={this.handleClick}>
        {content}
      </li>
    )
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}

TodoItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

export default TodoItem;
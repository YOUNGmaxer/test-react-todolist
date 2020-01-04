import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './TodoList.css';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  // 在组件即将被挂载到页面的时刻自动执行
  componentWillMount() {
    console.log('componentWillMount');
  }

  // 在被挂载之后执行
  // 适合用来发 ajax 请求
  componentDidMount() {
    console.log('componentDidMount & ajax');
    axios.get('/api/todolist')
      .then(() => alert('success'))
      .catch(err => console.error(err));
  }

  // 组件被更新之前执行
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  // 组件更新之前，shouldComponentUpdate之后执行
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  // 组件更新之后被执行
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('parent render');
    return (
      <Fragment>
        {/* 输入框 */}
        <div>
          {/* 使用htmlFor而不是for */}
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        {/* todo 列表 */}
        <ul>
          { this.getTodoItem() }
        </ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      ) 
    })
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list }
    });
  }
}

export default TodoList;
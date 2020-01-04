import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import { CHANG_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionType';

class AntdTodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div style={{margin: '10px'}}>
        <div style={{marginBottom: '10px'}}>
          <Input
            value={this.state.inputValue}
            placeholder="input"
            style={{width: '300px', marginRight: '10px'}}
            onChange={this.handleInputChange}
          />
          <Button
            type="primary"
            onClick={this.handleBtnClick}
          >提交</Button>
        </div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>}
          style={{width: '300px'}}
        />
      </div>
    )
  }

  handleInputChange(e) {
    const action = {
      type: CHANG_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = {
      type: ADD_TODO_ITEM
    };
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = {
      type: DELETE_TODO_ITEM,
      index
    };
    store.dispatch(action);
  }
}

export default AntdTodoList;
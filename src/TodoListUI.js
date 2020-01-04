import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

// UI组件（负责UI，不负责逻辑）
class TodoListUI extends Component {
  render() {
    return (
      <div style={{margin: '10px'}}>
        <div style={{marginBottom: '10px'}}>
          <Input
            value={this.props.inputValue}
            placeholder="input"
            style={{width: '300px', marginRight: '10px'}}
            onChange={this.props.handleInputChange}
          />
          <Button
            type="primary"
            onClick={this.props.handleBtnClick}
          >提交</Button>
        </div>
        <List
          bordered
          style={{width: '300px'}}
          dataSource={this.props.list}
          renderItem={(item, index) => <List.Item onClick={() => this.props.handleItemDelete(index)}>{item}</List.Item>}
        />
      </div>
    )
  }
}

export default TodoListUI;
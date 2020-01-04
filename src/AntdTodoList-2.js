import React from 'react';
import { Input, Button, List } from 'antd';
import { connect } from 'react-redux';
import {
  getInputChangeAction,
  getAddItemAction,
  getDelItemAction
} from './store-2/actionCreator'
import 'antd/dist/antd.css';

const TodoList = (props) => {
  const {
    inputValue,
    list,
    handleInputChange,
    handleClick,
    handleDelete
  } = props;

  return (
    <div style={{margin: '10px'}}>
      <div style={{marginBottom: '10px'}}>
        <Input
          value={inputValue}
          style={{width: '300px', marginRight: '10px'}}
          onChange={handleInputChange}
        />
        <Button
          onClick={handleClick}
        >提交</Button>
      </div>
      <List
        style={{width: '300px'}}
        bordered
        dataSource={list}
        renderItem={(item, index) => <List.Item onClick={() => handleDelete(index)}>{item}</List.Item>}
      />
    </div>
  )
}

// 定义state映射规则
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch
const mapDisaptchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = getInputChangeAction(e.target.value);
      dispatch(action);
    },

    handleClick() {
      const action = getAddItemAction();
      dispatch(action);
    },

    handleDelete(index) {
      const action = getDelItemAction(index);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(TodoList);
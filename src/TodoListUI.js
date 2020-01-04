import React from 'react';
import { Input, Button, List } from 'antd';

// 无状态组件（当一个组件只有render函数时，一般可以用无状态组件替换）
// 性能更高，没有周期函数
const TodoListUI = (props) => {
  return (
    <div style={{margin: '10px'}}>
      <div style={{marginBottom: '10px'}}>
        <Input
          value={props.inputValue}
          placeholder="input"
          style={{width: '300px', marginRight: '10px'}}
          onChange={props.handleInputChange}
        />
        <Button
          type="primary"
          onClick={props.handleBtnClick}
        >提交</Button>
      </div>
      <List
        bordered
        style={{width: '300px'}}
        dataSource={props.list}
        renderItem={(item, index) => <List.Item onClick={() => props.handleItemDelete(index)}>{item}</List.Item>}
      />
    </div>
  )
}

// UI组件（负责UI，不负责逻辑）
// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{margin: '10px'}}>
//         <div style={{marginBottom: '10px'}}>
//           <Input
//             value={this.props.inputValue}
//             placeholder="input"
//             style={{width: '300px', marginRight: '10px'}}
//             onChange={this.props.handleInputChange}
//           />
//           <Button
//             type="primary"
//             onClick={this.props.handleBtnClick}
//           >提交</Button>
//         </div>
//         <List
//           bordered
//           style={{width: '300px'}}
//           dataSource={this.props.list}
//           renderItem={(item, index) => <List.Item onClick={() => this.props.handleItemDelete(index)}>{item}</List.Item>}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUI;
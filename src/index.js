import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './AntdTodoList-2';
import { Provider } from 'react-redux';
import store from './store-2';

const App = (
  <Provider store={store}>
    <TodoList/>
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));

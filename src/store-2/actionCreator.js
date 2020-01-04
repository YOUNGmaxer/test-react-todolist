import {
  ADD_ITEM,
  DELETE_ITEM,
  CHANG_INPUT_VALUE
} from './actionType';

export const getInputChangeAction = (value) => ({
  type: CHANG_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_ITEM
});

export const getDelItemAction = (index) => ({
  type: DELETE_ITEM,
  index
});
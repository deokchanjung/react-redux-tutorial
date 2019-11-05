import { combineReducers } from 'redux';
import list from './list.reducer';

/**
 * combineReducers => 여러 reducer들을 합쳐서 반환해주는 함수
 */
export const reducers = combineReducers({
  list
  // 여러 reducer들을 선언하면 된다.
});

import { SEARCH } from '../actions/list.action';

// 초기상태 선언
const initialState = {
  keyword: ''
};

// Reducer 선언
const list = (prevState = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...prevState,
        keyword: action.keyword
      };

    default:
      return prevState;
  }
};

export default list;

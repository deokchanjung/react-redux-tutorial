import React from 'react';
import FilteredList from './components/FilteredList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './redux/reducers';

// store 생성
const store = createStore(reducers);

function App() {
  return (
    // Provider 컴포넌트는 추후 connect 함수를 통해 특정 컴포넌트와
    // 그에 맞는 상태를 연결하기 위해 store를 제공한다.
    <Provider store={store}>
      <div className="App">
        <FilteredList />
      </div>
    </Provider>
  );
}

export default App;

// 기존 소스 ------------------------------------------------------------------

// function App() {
//   return (
//     <div className="App">
//       <FilteredList />
//     </div>
//   );
// }

// export default App;

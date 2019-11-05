import React, { Component } from 'react';
import List from './List';
import { connect } from 'react-redux';
import { search } from '../redux/actions/list.action';

class FilteredList extends Component {
  constructor() {
    super();
  }

  render() {
    const { keyword, doSearch } = this.props;
    const frameworks = ['React', 'Angular', 'Vue', 'Ember', 'Woowahan'];

    return (
      <div>
        <input type="text" onChange={e => doSearch(e.target.value)} />
        <List items={frameworks} keyword={keyword} />
      </div>
    );
  }
}

/**
 * 컴포넌트의 props에 매핑시켜줄 상태를 정의
 * @param {*} state store에서 내려줄 state
 */
const mapStateToProps = currentState => {
  return {
    keyword: currentState.list.keyword
  };
};

/**
 * 컴포넌트의 props에 매핑하여 dispatch할 action들을 정의
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => {
  return {
    doSearch: keyword => dispatch(search(keyword))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredList);

// 기존 소스 ------------------------------------------------------------------

// export default class FilteredList extends Component {
//   constructor() {
//     super();

//     this.state = {
//       keyword: ''
//     };
//   }

//   updateFilter = e => {
//     this.setState({ keyword: e.target.value });
//   };

//   render() {
//     const { keyword } = this.state;
//     const frameworks = ['React', 'Angular', 'Vue', 'Ember', 'Woowahan'];

//     return (
//       <div>
//         <input type="text" onChange={e => this.updateFilter(e)} />
//         <List items={frameworks} keyword={keyword} />
//       </div>
//     );
//   }
// }

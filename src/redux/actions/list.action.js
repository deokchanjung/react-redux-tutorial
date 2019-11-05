// action type 상수 선언
export const SEARCH = 'SEARCH';

// action 생성 함수 선언 (실제 동작할 로직을 여기에 작성)
export const search = keyword => {
  return {
    type: SEARCH,
    keyword // keyword: keyword와 같다.
  };
};

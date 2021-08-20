//랭킹 데이터, 사용자 숫자 입력에 따른 게임 내역 데이터(스트라이크 아웃 볼 등)

// 액션 선언
const INSERT_DATA = "data/insert_data" as const;
const CONCAT_DATA = "data/concat_data" as const;

//액션 생성함수
export const insertData = (value: string) => ({
  type: INSERT_DATA,
  payload: value,
});

export const concatData = (value: string) => ({
  type: CONCAT_DATA,
  payload: value,
});

type ActionType = ReturnType<typeof insertData> | ReturnType<typeof concatData>;

// 상태 초기값
const initialValue = "";

//리듀서 생성
export function reducer(state = initialValue, action: ActionType) {
  switch (action.type) {
    case CONCAT_DATA:
      return state + action.payload;
    case INSERT_DATA:
      return action.payload;
    default:
      return state;
  }
}

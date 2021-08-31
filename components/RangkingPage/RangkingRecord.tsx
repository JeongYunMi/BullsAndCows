import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../src/store";
import { RangkingRecordText } from ".";

const RangkingRecord = () => {
  const state = useSelector((e: RootState) => e);
  console.log("rangking:", state);

  if (state.rangkingData.length) {
    return (
      <RangkingWrap>
        <RangkingWrapTitle>순위 기록</RangkingWrapTitle>
        {state.rangkingData.map((e, index) => (
          <RangkingRecordText
            key={index}
            nickName={e.nickName}
            score={e.score}
          />
        ))}
      </RangkingWrap>
    );
  } else {
    return (
      <RangkingWrap>
        <RangkingWrapTitle>순위 기록</RangkingWrapTitle>
        <br />
        <span>등록된 게임 기록이 존재하지 않습니다.</span>
      </RangkingWrap>
    );
  }
};

export default RangkingRecord;

const RangkingWrap = styled.div`
  border: solid 1px black;
`;

const RangkingWrapTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
`;

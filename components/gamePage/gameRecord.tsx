import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

type Props = {};

const GameRecord = (props: Props) => {
  const state = useSelector((e) => e) || null;
  return (
    <RecordWrap>
      <RecordWrapTitle>결과 기록</RecordWrapTitle>
      {state}
    </RecordWrap>
  );
};

export default GameRecord;

const RecordWrap = styled.div`
  border: solid 1px black;
`;

const RecordWrapTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
`;

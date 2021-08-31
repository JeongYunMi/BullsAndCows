import React from "react";

type Props = {
  nickName: string;
  score: number;
};

const RangkingRecordText = ({ nickName, score }: Props) => {
  return (
    <>
      <span>
        닉네임: {nickName} 점수:{score}{" "}
      </span>
      <br />
    </>
  );
};

export default RangkingRecordText;

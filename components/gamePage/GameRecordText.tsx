import React from "react";

type Props = {
  recordString: string;
};

const GameRecordText = ({ recordString }: Props) => {
  return (
    <>
      <span>{recordString}</span>
      <br />
    </>
  );
};
export default GameRecordText;

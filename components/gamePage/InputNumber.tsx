import styled from "styled-components";
import { Button, Input } from "../common";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { concatData } from "../../src/store/index";
import CreateNumber from "../../util/CreateNumber";

type Props = {
  start: number;
};

const InputNumber = ({ start }: Props) => {
  const dispatch = useDispatch();
  const { resultNumber } = CreateNumber(start);
  console.log("r", resultNumber);
  const [value, setValue] = useState<string>("");

  const setData = () => {
    let st = 0;
    let b = 0;
    let out = 4;
    for (let i = 0; i < 4; ++i) {
      for (let j = 0; j < 4; ++j) {
        if (resultNumber[i] === value[j]) {
          if (i === j) {
            st += 1;
            out -= 1;
          } else {
            b += 1;
            out -= 1;
          }
        }
      }
    }
    dispatch(
      concatData(
        value + " - ST: " + st + "개  B: " + b + "개  O:" + out + "개<br>"
      )
    );
  };

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setValue(e.currentTarget.value);
  };

  return (
    <InputNumberWrap>
      <Input onChange={onChangeHandler} />
      <Button onClick={setData}>버튼</Button>
    </InputNumberWrap>
  );
};

export default InputNumber;

const InputNumberWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

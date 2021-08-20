import styled from "styled-components";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { insertData } from "../src/store/index";
import { InputNumber, GameRecord } from "../components/gamePage";
import { Button } from "../components/common/index";
import { useEffect, useState } from "react";

const Game = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [start, setStart] = useState<number>(0);
  const moveMain = () => {
    setStart((prev) => prev + 1);
    router.push("/");
  };

  useEffect(() => {
    return () => {
      dispatch(insertData(""));
    };
  }, [start]);

  return (
    <Wrapper>
      <Header>
        <Title>gamepage</Title>
        <Button onClick={moveMain}>게임 포기</Button>
      </Header>
      <InputNumber start={start} />
      <GameRecord />
    </Wrapper>
  );
};
export default Game;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 72px;
`;

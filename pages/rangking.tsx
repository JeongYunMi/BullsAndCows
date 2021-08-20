import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Rangking = () => {
  const router = useRouter();
  const state = useSelector((e) => e) || null;

  const moveMain = () => {
    router.push("/");
  };

  return (
    <>
      Ranking
      <button onClick={moveMain}>메인페이지로 이동</button>
      <br />
      {state}
    </>
  );
};
export default Rangking;

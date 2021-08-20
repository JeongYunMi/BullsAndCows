import { useState, useEffect } from "react";

const CreateNumber = (check: number) => {
  const [resultNumber, setResultNumber] = useState<string>("0000");

  const randomNumber = () => {
    return String(Math.floor(Math.random() * 10));
  };
  useEffect(() => {
    void (async function () {
      let temp = [""];
      let i = 0;
      while (i < 4) {
        let rand = randomNumber();
        if (temp.indexOf(rand) === -1) {
          temp.push(rand);
          i += 1;
          continue;
        } else {
          i -= 1;
        }
      }
      console.log(temp);
      setResultNumber(temp[1] + temp[2] + temp[3] + temp[4]);
    })();
  }, [check]);

  return {
    resultNumber,
  };
};

export default CreateNumber;

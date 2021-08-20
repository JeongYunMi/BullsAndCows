import { useState } from "react";

const NumberCheck = (resultNumber: string, number: string) => {
  const [checkResult, setCheckResult] = useState<string>("");

  void (async function () {
    let st = 0;
    let b = 0;
    let out = 4;
    for (let i = 0; i < 4; ++i) {
      for (let j = 0; j < 4; ++j) {
        if (resultNumber[i] === number[j]) {
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
    setCheckResult(
      number + "- ST: " + st + "개  B: " + b + "개  O:" + out + "개"
    );
  })();

  return {
    checkResult,
  };
};

export default NumberCheck;

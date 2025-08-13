import { useState, useEffect } from "react";

function App2() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // useEffect(() => {
  //   console.log("useEffect 실행");
  //   setTimeout(() => {
  //     alert("환영합니다!");
  //   }, 3000);
  // }, []);
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    console.log("useEffect 실행", count);
  }, [count]);

  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>useEffect</h2>
      <button onClick={countUp}>카운트 증가</button>
      <button onClick={() => setDark(!dark)}>
        현재 테마: {dark ? "다크" : "라이트"}
      </button>
    </div>
  );
}

export default App2;

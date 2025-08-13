import React, { useState, useCallback } from "react";

// const Child = React.memo(({ onClick }: { onClick: () => void }) => {
//   console.log("자식 컴포넌트 렌더링");
//   return (
//     <div>
//       <button onClick={onClick}>자식 버튼 클릭</button>
//     </div>
//   );
// });
const Child = ({ onClick }: { onClick: () => void }) => {
  console.log("자식 컴포넌트 렌더링");
  return (
    <div>
      <button onClick={onClick}>자식 버튼 클릭</button>
    </div>
  );
};

export default function UseCallbackExample() {
  // count
  const [count, setCount] = useState(0);

  // other
  const [other, setOther] = useState(false);

  //   const handleClick = useCallback(() => {
  //     setCount((prev) => prev + 1);
  //   }, []);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>useCallback 예제</h2>
      <p>Count: {count}</p>
      <button onClick={() => setOther(!other)}>
        Toggle: {other.toString()}
      </button>
      <Child onClick={handleClick} />
    </div>
  );
}

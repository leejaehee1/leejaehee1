import "./App.css";
import Clock from "./pages/Clock";
import { useState } from "react";
import { useClock } from "./hooks";

// export default function App() {
//   // let today = useRef(new Date());
//   // const [today, setToday] = useState(new Date());

//   // const id = setInterval(() => {
//   //   today = new Date();
//   // }, 1000);

//   // useEffect(() => {
//   //   console.log("useEffect called.");
//   //   const duration = 1000;
//   //   const id = setInterval(() => {
//   //     // today.current = new Date();
//   //     // console.log("today", today.current.toLocaleTimeString());
//   //     setToday(new Date());
//   //   }, duration);
//   //   return () => clearInterval(id);
//   // }, []);

//   const today = useClock();

//   return (
//     <main>
//       <Clock today={today} />
//     </main>
//   );
// }

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  return (
    <div>
      <h2>{"덧셈기"}</h2>
      <div className="flex flex-row items-center">
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(parseInt(e.target.value))}
        />
        <span>{"+"}</span>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(parseInt(e.target.value))}
        />
      </div>

      <p>{`덧셈결과는 : ${number1} + ${number2} = ${number1 + number2}`}</p>
    </div>
  );
}

import GreetingPage from "./pages/GreetingPage";
import ApplyScrapPage from "./pages/ApplyScrapPage";
import QuotationPage from "./pages/QuotationPage";
import ScrapCompletePage from "./pages/ScrapCompletePage";
import { useState } from "react";
function App() {
  const [stage, setStage] = useState(1);
  const [count, setCount] = useState(0);

  const prevStage = () => {
    setStage(stage - 1);
  };

  const nextStage = () => {
    setStage(stage + 1);
  };

  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button className="bg-blue-500 p-4 m-4" onClick={countUp}>
        카운트 증가{count}
      </button>
      <button className="bg-blue-500 p-4 m-4" onClick={prevStage}>
        이전
      </button>
      <span>{stage}</span>
      <button className="bg-blue-500 p-4 m-4" onClick={nextStage}>
        다음
      </button>
      {stage === 1 && <GreetingPage />}
      {stage === 2 && <ApplyScrapPage />}
      {stage === 3 && <QuotationPage />}
      {stage === 4 && <ScrapCompletePage />}
    </div>
  );
}

export default App;

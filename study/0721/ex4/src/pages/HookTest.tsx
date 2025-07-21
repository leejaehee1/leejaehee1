import LayoutEffectExample from "../components/LayoutEffectExample";
import IdExample from "../components/IdExample";
import TransitionExample from "../components/TransitionExample";
import ParentComponent from "../components/ParentComponent";

export default function HookTest() {
  return (
    <div>
      <h2>LayoutEffectExample 테스트</h2>
      <LayoutEffectExample />
      <IdExample />
      <TransitionExample />
      <ParentComponent />
    </div>
  );
}

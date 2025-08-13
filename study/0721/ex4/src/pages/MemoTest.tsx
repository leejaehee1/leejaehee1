import ExpensiveComponent from "../components/ExpensiveComponent";
import UseMemoExample from "../components/UseMemoExample";
import Parent from "../components/Parent";
import UseCallbackExample from "../components/UseCallbackExample";

export default function MemoTest() {
  return (
    <div>
      <h2>useMemo 테스트</h2>
      <ExpensiveComponent />
      <UseMemoExample />
      <Parent />
      <UseCallbackExample />
    </div>
  );
}

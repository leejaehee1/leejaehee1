import ExpensiveComponent from "../components/ExpensiveComponent";

export default function MemoTest() {
  return (
    <div>
      <h2>useMemo 테스트</h2>
      <ExpensiveComponent />
    </div>
  );
}

import { SyntheticEvent } from "react";

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles, currentTarget } = e;
    console.log(
      `click event bubbles on <div>`,
      isTrusted,
      target,
      bubbles,
      currentTarget
    );
  };

  const onButtonClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles } = e;
    console.log(`click event starts at <button>`, isTrusted, target, bubbles);
    // 이벤트 버블링 중단을 위한 stopPropagation 호출이며 뒤에 나오는 예제를 합쳤음
    e.stopPropagation();
  };
  return (
    <div onClick={onDivClick}>
      <p>EventBubbling</p>
      <button onClick={onButtonClick}>Click button</button>
    </div>
  );
}

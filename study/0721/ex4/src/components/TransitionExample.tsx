import React, { useState, useTransition } from "react";

export default function TransitionExample() {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    startTransition(() => {
      const items = [];
      for (let i = 0; i < 10000000; i++) {
        items.push(e.target.value);
      }
      setList(items);
    });
  };
  return (
    <div>
      <input value={input} onChange={handleChange} />
      {isPending && <span>로딩 중...</span>}
      {/* {!isPending && <div>총 {list.length}개</div>} */}
      <div>총 {list.length}개</div>
    </div>
  );
}

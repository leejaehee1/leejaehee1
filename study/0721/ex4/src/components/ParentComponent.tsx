import React, { useRef } from "react";
import CustomInput from "./CustomInput";

export interface CustomInputHandle {
  focus: () => void;
  clear: () => void;
}

export default function ParentComponent() {
  const inputRef = useRef<CustomInputHandle | null>(null);

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>포커스</button>
      <button onClick={() => inputRef.current?.clear()}>초기화</button>
    </div>
  );
}

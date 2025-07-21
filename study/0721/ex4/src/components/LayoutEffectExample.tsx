import React, { useLayoutEffect, useRef, useEffect } from "react";

export default function LayoutEffectExample() {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.background = "yellow";
      boxRef.current.style.width = "300px";
    }
  }, []);

  //   useEffect(() => {
  //     if (boxRef.current) {
  //       boxRef.current.style.background = "yellow";
  //       boxRef.current.style.width = "300px";
  //     }
  //   }, []);

  return <div ref={boxRef}>useLayoutEffect 로 스타일 적용</div>;
}

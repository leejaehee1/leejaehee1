import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EventListener from "./pages/EventListener";
import ReactOnClick from "./pages/ReactOnClick";
import EventBubbling from "./pages/EventBubbling";
import FileInput from "./pages/FileInput";
import DragDrop from "./pages/DragDrop";

// export default function App() {
//   // const texts = [<p key="1">hello</p>, <p key="1">world</p>];
//   // const texts = ["hello", "world"].map((text, index) => (
//   //   <p key={index}>{text}</p>
//   // ));
//   const texts = ["hello", "world"].map((text, index) => (
//     <p key={index} children={text} />
//   ));
//   return <div children={texts} />;
// }

export default function App() {
  return (
    <div>
      {/* <EventListener /> */}
      {/* <ReactOnClick /> */}
      {/* <EventBubbling /> */}
      {/* <FileInput /> */}
      <DragDrop />
    </div>
  );
}

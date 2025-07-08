import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as D from "./data";
import { Component } from "react";
import ClassComponent from "./ClassComponent";

// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassComponent href="https://www.google.com" text="go to Google" />
//         <ClassComponent href="https://www.twitter.com" text="go to Twitter" />
//       </ul>
//     );
//   }
// }

// export default function App() {
//   return (
//     <ul>
//       <ClassComponent href="https://www.google.com" text="go to Google" />
//       <ClassComponent href="https://www.twitter.com" text="go to Twitter" />
//     </ul>
//   );
// }

const App = () => {
  return (
    <ul>
      <ClassComponent href="https://www.google.com" text="go to Google" />
      <ClassComponent href="https://www.twitter.com" text="go to Twitter" />
    </ul>
  );
};

export default App;

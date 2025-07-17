import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@fontsource/material-icons";
import RefTest from "./pages/RefTest";
import App2 from "./contexts/UserContext";
import ThemeTest from "./pages/ThemeTest";

// function App() {
//   return (
//     <div className="App">
//       <RefTest />
//     </div>
//   );
// }

function App() {
  // return <App2 />;
  return <ThemeTest />;
}

export default App;

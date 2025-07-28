import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <h1>Redux Toolkit createSlice 실습</h1>
      <Counter />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoState, Todo } from "../../types/todo";

const initialState: TodoState = {
  todos: [],
  nextId: 1,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: state.nextId,
        text: action.payload,
        done: false,
      });
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    clearTodos(state) {
      state.todos = [];
      state.nextId = 1;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, clearTodos } =
  todoSlice.actions;
export default todoSlice.reducer;

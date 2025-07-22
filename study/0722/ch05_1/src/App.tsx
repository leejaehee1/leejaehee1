import "./App.css";
import UseReducerClock from "./pages/UseReducerClock";
import ReduxClock from "./pages/ReduxClock";
import type { Action } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { useStore } from "./store";

export default function App() {
  const store = useStore();

  return (
    <ReduxProvider store={store}>
      <div />
    </ReduxProvider>
  );
}

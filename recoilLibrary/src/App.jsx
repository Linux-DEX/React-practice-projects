import "./App.css";
import { RecoilRoot } from "recoil";
import CharacterCounter from "./Components/CharacterCounter";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
      <br />
      <hr />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;

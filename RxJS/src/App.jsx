import "./App.css";
import Component1 from "./Components/methodOne/CompOne";
import Component2 from "./Components/methodOne/CompTwo";
import Receiver from "./Components/methodTwo/Receiver";
import Sender from "./Components/methodTwo/Sender";

function App() {
  return (
    <>
      <h1>RxJS tutorial</h1>
      <Component1 />
      <Component2 />
      <h2>different method</h2>
      <Sender />
      <Receiver />
    </>
  );
}

export default App;

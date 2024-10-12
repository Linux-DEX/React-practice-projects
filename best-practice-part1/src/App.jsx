import "./App.css";
import Card from "./Components/InfoDriveStateProp";
import BlogPost from "./Components/InitializingStatewithObject";
import Form from "./Components/MultipleInstance";
import CouterExampler from "./Components/StaleCloser";

function App() {
  return (
    <>
      <h1>best practice in reactjs</h1>
      <CouterExampler />
      <br />
      <br />
      <BlogPost />
      <br />
      <br />
      <Card />
      <br />
      <br />
      <Form />
    </>
  );
}

export default App;

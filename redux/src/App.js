import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="btn">
          <a className="quantity_minus" title='Decrement'><span> - </span></a>
          <input name="quantity-input" type="text" className="quantity" value="0" />
          <a className="quantity_plus" title='Increment'><span> + </span></a>
        </div>
      </div>
    </>
  );
}

export default App;

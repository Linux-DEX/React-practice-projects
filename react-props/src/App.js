import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Data from './Data/Data';

function App() {

  const NamesOfPerson = Data.map( (item) => {
    return <Hello name={item.name} hero_name={item.hero_name}/>
  })

  return (
    <div className="App">
      <Greet name="Linux-DEX" >
        <p>This is Children props</p>
      </Greet>
      <Greet />
      {/* <Welcome name="Linux-DEX" />
      <Hello name="Linux-DEX" /> */}

      {NamesOfPerson}
    </div>
  );
}

export default App;

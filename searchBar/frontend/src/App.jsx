import "./App.css";
import FazzySearch from "./Components/FazzySearch/FazzySearch";
import SearchBar from "./Components/SearchBar";
import SearchBarAPI from "./Components/SearchBarAPI/SearchBarAPI";

function App() {
  return (
    <>
      <h2>Search BAR</h2>
      <h2>Fazzy finder search</h2>
      <FazzySearch />
      <SearchBar />
      <h2>search using api</h2>
      <SearchBarAPI />
    </>
  );
}

export default App;

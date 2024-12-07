import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import PlayList from "./components/PlayList";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [searchInput, setSearchInput] = useState("Search for a song...");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="container">
      <SearchBar handleInputChange={handleInputChange} />
      <div className="list-container">
        <SearchResults />
        <PlayList />
      </div>
    </div>
  );
}

export default App;

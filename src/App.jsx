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

  const songs = [
    { id: 1, artist: "Artist 1", title: "Song 1", album: "album 1" },
    { id: 2, artist: "Artist 2", title: "Song 2", album: "album 2" },
    { id: 3, artist: "Artist 3", title: "Song 3", album: "album 3" },
    { id: 4, artist: "Artist 4", title: "Song 4", album: "album 4" },
    { id: 5, artist: "Artist 5", title: "Song 5", album: "album 5" },
    { id: 6, artist: "Artist 6", title: "Song 6", album: "album 6" },
  ];

  const playlist = [
    { id: 1, artist: "Artist 1", title: "Song 1", album: "album 1" },
    { id: 2, artist: "Artist 2", title: "Song 2", album: "album 2" },
    { id: 3, artist: "Artist 3", title: "Song 3", album: "album 3" },
  ];

  return (
    <div className="container">
      <SearchBar handleInputChange={handleInputChange} />
      <div className="list-container">
        <SearchResults songs={songs} />
        <PlayList playlist={playlist} />
      </div>
    </div>
  );
}

export default App;

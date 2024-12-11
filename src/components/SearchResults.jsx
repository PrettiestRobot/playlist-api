function SearchResults({ songs }) {
  return (
    <div className="list">
      <h2>Results</h2>
      <ul>
        {songs.map((track) => (
          <li key={track.id}>
            <h3>{track.title}</h3>
            <p>
              {track.artist} - {track.album}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;

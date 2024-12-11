function PlayList({ playlist }) {
  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {playlist.map((track) => (
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

export default PlayList;

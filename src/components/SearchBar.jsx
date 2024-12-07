function SearchBar(props) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for a song..."
        onChange={props.handleInputChange}
      />
    </div>
  );
}

export default SearchBar;

const SearchFilter = ({ search, setSearch, region, setRegion }) => {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchFilter;
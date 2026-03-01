import { useEffect, useState } from "react";
import SearchFilter from "../components/SearchFilter";
import CountryCard from "../components/CountryCard";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
  fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital")
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        setCountries(data);
      } else {
        console.error("API error:", data);
        setCountries([]);
      }
    })
    .catch(err => {
      console.error(err);
      setCountries([]);
    });
  }, []);

  const filteredCountries = Array.isArray(countries)
    ? countries
        .filter(c =>
          c.name.common.toLowerCase().includes(search.toLowerCase())
        )
        .filter(c =>
          region ? c.region === region : true
        )
    : [];

  return (
    <div className="container">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
      />

      <div className="countries-grid">
        {filteredCountries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
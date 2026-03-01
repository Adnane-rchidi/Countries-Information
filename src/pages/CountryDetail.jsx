import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CountryDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(res => res.json())
      .then(data => setCountry(data[0]));
  }, [name]);

  if (!country) return <p>Loading...</p>;

  return (
    <div className="detail-container">
      <button onClick={() => navigate(-1)}>← Back</button>

      <div className="detail-content">
        <img src={country.flags.svg} alt={country.name.common} />

        <div>
          <h2>{country.name.common}</h2>
          <p>
            <strong>Native Name:</strong>{" "}
            {country.name?.nativeName
              ? Object.values(country.name.nativeName)[0]?.common
              : country.name.common}
          </p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Sub Region:</strong> {country.subregion}</p>
          <p><strong>Capital:</strong> {country.capital?.[0]}</p>
          <p><strong>Top Level Domain:</strong> {country.tld?.[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
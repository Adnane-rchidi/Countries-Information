import { useNavigate } from "react-router-dom";

const CountryCard = ({ country }) => {
  const navigate = useNavigate();

  return (
    <div
      className="country-card"
      onClick={() => navigate(`/country/${country.name.common}`)}
    >
      <img src={country.flags.svg} alt={country.name.common} />
      <div className="card-body">
        <h3>{country.name.common}</h3>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      </div>
    </div>
  );
};

export default CountryCard;
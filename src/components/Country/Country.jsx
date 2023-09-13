import { useState } from 'react';
import './Country.css';
const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleClick = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited ? 'visited' : ''}`}>
      <h3 style={{ color: visited ? 'green' : 'white' }}>{name.common} </h3>
      <img className="img" src={flags.png} alt="" />
      <p style={{ color: visited ? 'black' : 'white' }}>
        Population: {population}
      </p>
      <p style={{ color: visited ? 'black' : 'white' }}>Area: {area} </p>
      <p style={{ color: visited ? 'black' : 'white' }}>Country Code: {cca3}</p>
      <button onClick={handleClick} className="btn-primary">
        {visited ? 'Visited' : 'Going'}
      </button>
      <p>{visited ? '' : 'I Want to Visit this Country'} </p>
    </div>
  );
};

export default Country;

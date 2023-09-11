import { useEffect, useState } from 'react';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h3>Countries: {countries.length}</h3>
    </div>
  );
};

export default Countries;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/cities/all')
      .then(response => {
        setCities(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the cities!', error);
      });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().startsWith(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Cities</h1>
      <input 
        type="text" 
        placeholder="Filter cities" 
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredCities.map(city => (
          <li key={city._id}>{city.name}, {city.country}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cities;

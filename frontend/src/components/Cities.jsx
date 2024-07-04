import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../store/actions/cityActions';

const Cities = ({ citiesData, fetchCities }) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCities = citiesData.cities.filter(city => 
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
      {citiesData.loading && <p>Loading...</p>}
      {citiesData.error && <p>{citiesData.error}</p>}
      <ul>
        {filteredCities.map(city => (
          <li key={city._id}>{city.name}, {city.country}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    citiesData: state.cities
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCities: () => dispatch(fetchCities())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);

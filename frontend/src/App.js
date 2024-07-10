import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Cities from './components/Cities';
import ItineraryForm from './components/ItineraryForm';
import CityDetail from './components/CityDetail';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/cities/:id" element={<CityDetail />} />
          <Route path="/add-itinerary/:cityId" element={<ItineraryForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

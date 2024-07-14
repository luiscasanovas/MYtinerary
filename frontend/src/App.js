import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cities from './components/Cities';
import CityDetail from './components/CityDetail';
import ItineraryForm from './components/ItineraryForm';
import CityForm from './components/CityForm';
import Landing from './components/Landing';
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
          <Route path="/add-city" element={<CityForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

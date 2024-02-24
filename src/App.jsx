import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import BrowserRouter and Route
import PlanetCard from './components/PlanetCard';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

  useEffect(() => {
    fetchData('https://swapi.dev/api/planets/?format=json');
  }, []);

  const fetchData = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPlanets(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleNextPage = () => {
    fetchData(nextPage);
  };

  const handlePrevPage = () => {
    fetchData(prevPage);
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Star Wars Planets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {planets.map((planet, index) => (
            <PlanetCard key={index} planet={planet} />
          ))}
        </div>
        <Pagination prevPage={prevPage ? handlePrevPage : null} nextPage={nextPage ? handleNextPage : null} />
      </div>
    </Router>
  );
};

export default App;

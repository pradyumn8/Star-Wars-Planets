import React, { useState, useEffect } from 'react';

const Resident = ({ resident }) => (
  <div>
    <p><strong>Name:</strong> {resident.name}</p>
    <p><strong>Height:</strong> {resident.height}</p>
    <p><strong>Mass:</strong> {resident.mass}</p>
    <p><strong>Gender:</strong> {resident.gender}</p>
  </div>
);

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const promises = planet.residents.map(url => fetch(url).then(res => res.json()));
      const residentsData = await Promise.all(promises);
      setResidents(residentsData);
    };

    fetchResidents();
  }, [planet.residents]);

  return (
    <div className="border bg-slate-200 rounded-md p-4 m-2">
      <h2 className="text-xl font-semibold">{planet.name}</h2>
      <p><strong>Climate:</strong> {planet.climate}</p>
      <p><strong>Population:</strong> {planet.population}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Residents:</h3>
        {residents.map((resident, index) => (
          <Resident key={index} resident={resident} />
        ))}
      </div>
    </div>
  );
};

export default PlanetCard;

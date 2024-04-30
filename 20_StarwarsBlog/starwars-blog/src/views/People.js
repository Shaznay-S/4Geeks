import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPeople, fetchResource } from '../api/SwapiService';

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const data = await getPeople();
      const peopleWithDetails = await Promise.all(data.results.map(async (person) => {
        // Fetch homeworld details
        const homeworld = await fetchResource('planets', person.homeworld.split('/').reverse()[1]);
        // Fetch vehicles details, note that this is simplified and assumes each person has at least one vehicle
        const vehicles = await Promise.all(person.vehicles.map(async (vehicleUrl) => {
          const vehicleId = vehicleUrl.split('/').reverse()[2]; // Adjust based on the actual URL structure
          return await fetchResource('vehicles', vehicleId);
        }));

        return { ...person, homeworld: homeworld.name, vehicles };
      }));
      setPeople(peopleWithDetails);
    };

    fetchPeople();
  }, []);

  return (
    <div className="row">
      {people.map((person, index) => (
        <div className="col-md-4" key={index}>
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{person.name}</h5>
              <p className="card-text">Gender: {person.gender}</p>
              <p className="card-text">Birth Year: {person.birth_year}</p>
              <p className="card-text">
                Homeworld:
                <Link to={`/planets/${person.homeworld.id}`}>{person.homeworld.name}</Link>
              </p>
              {person.vehicles.length > 0 && (
                <div>
                  <p>Vehicles:</p>
                  <ul>
                    {person.vehicles.map((vehicle, idx) => (
                      <li key={idx}>
                        <Link to={`/vehicles/${vehicle.id}`}>{vehicle.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default People;

import React, { useEffect, useState } from 'react';

const Home = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => setPeople(data.results.slice(0, 5))); // Fetch and display only 5 people for the carousel
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {people.map((person, index) => (
          <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {people.map((person, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="d-flex justify-content-center">
              <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">{person.name}</h5>
                  <p className="card-text">Birth Year: {person.birth_year}</p>
                  <p className="card-text">Gender: {person.gender}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Home;

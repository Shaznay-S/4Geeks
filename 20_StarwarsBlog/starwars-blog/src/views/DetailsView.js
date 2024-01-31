import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsView = () => {
  const { type, id } = useParams();

  return (
    <div>
      <h1>Details View</h1>
      <p>Displaying details for {type} with ID: {id}</p>
      {/* Fetch and display details based on type and id */}
    </div>
  );
};

export default DetailsView;

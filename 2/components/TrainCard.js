import React from 'react';
import { Link } from 'react-router-dom';

function TrainCard({ train }) {
  return (
    <div>
      <h3>{train.name}</h3>
      <p>Departure Time: {train.departureTime}</p>
      {/* ...and so on */}
      <Link to={`/train/${train.id}`}>View Details</Link>
    </div>
  );
}

export default TrainCard;
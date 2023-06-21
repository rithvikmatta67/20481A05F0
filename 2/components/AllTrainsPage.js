import React, { useEffect, useState } from 'react';
import TrainCard from './TrainCard';

function AllTrainsPage() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    
    fetchTrainData();
  }, []);

  const fetchTrainData = async () => {
    try {
      
      const response = await fetch('API_ENDPOINT/all-trains');
      const data = await response.json();
      setTrains(data);
    } catch (error) {
      console.error('Error fetching train data:', error);
    }
  };

  return (
    <div>
      <h1>All Trains</h1>
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
}

export default AllTrainsPage;

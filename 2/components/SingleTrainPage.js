import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleTrainPage() {
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    
    fetchSingleTrainData();
  }, [id]);

  const fetchSingleTrainData = async () => {
    try {
      
      const response = await fetch(`API_ENDPOINT/trains/${id}`);
      const data = await response.json();
      setTrain(data);
    } catch (error) {
      console.error('Error fetching single train data:', error);
    }
  };

  return (
    <div>
      {train ? (
        <div>
          <h1>Train Details</h1>
          {/* Display train details */}
          <p>Train Name: {train.name}</p>
          <p>Departure Time: {train.departureTime}</p>
          {/* ...and so on */}
        </div>
      ) : (
        <p>Loading train data...</p>
      )}
    </div>
  );
}

export default SingleTrainPage;

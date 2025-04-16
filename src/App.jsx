import React, { useState } from 'react'; // Importing React and useState
import Gallery from './components/Gallery'; //  Importing Gallery componen
import DestinationSelector from './components/DestinationSelector'; // Importing DestinationSelector component

const App = () => {
  const [tours, setTours] = useState([]);
  const { selectedDestination, setSelectedDestination } = useState('All');

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  const filteredTours = 
    selectedDestination === 'All'
      ? tours
      : tours.filter((tour) => tour.destination === selectedDestination); 

  return (
    <main>
      <h1>Tour Comparison</h1>
      <DestinationSelector
        selectedDestination={selectedDestination}
        setSelectedDestination={setSelectedDestination}
      />
      <h2>Available Tours</h2>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
};

export default App;
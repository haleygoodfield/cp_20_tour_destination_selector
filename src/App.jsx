import React, { useEffect, useState } from 'react'; // Importing React
import Gallery from './components/Gallery'; // Importing Gallery component
import DestinationSelector from './components/DestinationSelector'; // Importing DestinationSelector component

const App = () => { // Main App component
  const [tours, setTours] = useState([]); // State to hold tours data
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false); 
  const [selectedDestination, setSelectedDestination] = useState("All"); // State to hold selected destination

  const fetchTours = async () => { // Function to fetch tours data
    setLoading(true); // Setting loading to true
    setError(false); // Resetting error state
    try {
      const res = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project"); // Fetching data from API
      const data = await res.json();
      setTours(data);
    } catch (err) { // Error handling
      setError(true);
    } finally { 
      setLoading(false); // Setting loading to false after fetching data
    }
  }; 

  useEffect(() => { // useEffect to fetch tours data on component mount
    fetchTours(); 
  }, []);

  const removeTour = (id) => { // Function to remove a tour
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id)); // Filtering out the removed tour
  };

  const filteredTours = selectedDestination === "All" ? tours : tours.filter((tour) => tour.name === selectedDestination); // Filtering tours based on selected destination
  
  return (
    <main>
      <h1>Exlore Our Tours</h1> {/* Main heading */}
      <DestinationSelector // Destination selector component
        tours={tours}
        selected={selectedDestination}
        setSelected={setSelectedDestination}
      />
      <Gallery  // Gallery component to display tours
        tours={filteredTours} 
        loading={loading}
        error={error}
        selectedDestination={selectedDestination}  // Filtered tours based on selected destination
        onRemove={removeTour} // Function to remove a tour
        onRefresh={fetchTours} // Function to refresh tours data
      />
    </main>
  );
};

export default App; // Exporting App component
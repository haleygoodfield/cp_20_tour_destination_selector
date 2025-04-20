import React, { useEffect, useState } from 'react'; // Importing React
import Gallery from './components/Gallery'; // Importing Gallery component
import DestinationSelector from './components/DestinationSelector'; // Importing DestinationSelector component

const App = () => { // Main App component

  // Task 1: Store tours in state
  const [tours, setTours] = useState([]); // State to hold tours data
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false); 
  const [selectedDestination, setSelectedDestination] = useState("All"); // State to hold selected destination

  // Task 1: Use fetch() and useEffect() to get data
  const fetchTours = async () => { // Function to fetch tours data
    setLoading(true); // Setting loading to true
    setError(false); // Resetting error state
    try {
      // Peer Reviewers - If error message displays, replace the fetch URL below with the one that works on your device!
      const res = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project"); // Fetching data from API (CORS proxy: AllOrigins Proxy)
      const data = await res.json();
      setTours(data); // Task 1: Store data in UseState
    } catch (err) { 
      setError(true); // Task 1: Handle error state 
    } finally { 
      setLoading(false); // Task 1: Handle loading state 
    }
  }; 

  useEffect(() => { // useEffect to fetch tours data on component mount
    fetchTours(); 
  }, []);

  // Task 3: When "Not Interested" is clicked, remove the tour
  const removeTour = (id) => { // Function to remove a tour
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id)); // Filtering out the removed tour
  };

  // Task 2: Filter tours based on the selected destination
  const filteredTours = selectedDestination === "All" ? tours : tours.filter((tour) => tour.name === selectedDestination); // Filtering tours based on selected destination
  
  return (
    <main>
      <h1>Explore Our Tours</h1> {/* Main heading */}
      <DestinationSelector // Destination selector component
        tours={tours} 
        selected={selectedDestination}
        setSelected={setSelectedDestination} // Set selected destination
      />
      <Gallery  // Gallery component to display tours
        tours={filteredTours} 
        loading={loading}
        error={error}
        selectedDestination={selectedDestination}  // Filtered tours based on selected destination
        onRemove={removeTour} // Function to remove a tour
        onRefresh={fetchTours} // Task 4: Refresh button to fetch tours again
      />
    </main>
  );
};

export default App; // Exporting App component
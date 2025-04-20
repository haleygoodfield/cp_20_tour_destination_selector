import React from 'react'; // Importing React and hooks
import TourCard from './TourCard'; // Importing TourCard component

const Gallery = ({ tours, onRemove, loading, error, onRefresh }) => { // Gallery component to display tours
  // Task 1: Handle loading state
    if (loading) return <h2>Loading...</h2>; // Loading message

    // Task 2: Handle error state
    if (error) return <h2>Something went wrong. Please try again later.</h2>; // Error message
   
   // Task 4: If all cards are removed, show a message
    if (tours.length === 0) { // No tours available
        return (
            <div>
            {/* Message when no tours are available */}
            <h2>We're Sorry, No Tours Left.</h2> 
            {/* Message to refresh destinations */}
            <div className="refresh-container">
            <p className ="refresh-msg">Refresh to reload, and select a different destination.</p> 
            {/*Refresh button to fetch tours again */}
            <button onClick={onRefresh} className="btn-refresh">Refresh Tours</button> 
            </div>
          </div>
        );
    }

  return ( 
    <section className="gallery">  
    {/* Task 3: Render the tourCards*/}
      {tours.map((tour) => (
        // TourCard component to display each tour 
        <TourCard key={tour.id} {...tour} onRemove={onRemove} /> 
      ))}
    </section>
  );
};

export default Gallery; // Exporting Gallery component
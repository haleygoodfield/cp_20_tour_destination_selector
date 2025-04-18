import React from 'react'; // Importing React and hooks
import TourCard from './TourCard'; // Importing TourCard component

const Gallery = ({ tours, onRemove, loading, error, onRefresh }) => { // Gallery component to display tours
    if (loading) return <h2>Loading...</h2>; // Loading message
    if (error) return <h2>Something went wrong. Please try again later.</h2>; // Error message
    if (tours.length === 0) { // No tours available
        return (
            <div>
            {/* Message when no tours are available */}
            <h2>No Tours Left</h2> 
            {/* Option to select another destinaiton */}
            <p> Refresh to reload, or select a different destination.</p> 
            {/*Refresh button to fetch tours again */}
            <button onClick={onRefresh}>Refresh Tours</button> 
            </div>
        );
    }

  return ( 
    <section className="gallery">  
      {tours.map((tour) => (
        // TourCard component to display each tour 
        <TourCard key={tour.id} {...tour} onRemove={onRemove} /> 
      ))}
    </section>
  );
};

export default Gallery; // Exporting Gallery component
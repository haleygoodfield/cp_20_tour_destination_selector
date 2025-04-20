import React from 'react'; // Importing React

const DestinationSelector = ({ tours, selected, setSelected }) => { // DestinationSelector component
  // Task 2: Extract all unique name values from the tours
  const destinations = ["All", ...new Set(tours.map((tour) => tour.name))]; // Getting unique destinations from tours data

    return ( // Rendering the component
    <div className="destination-selector"> {/* Container for destination selector */}
      <h2>Have a Destination in Mind?</h2> {/* Heading for destination selector */}
      <h3> Select your destination below.</h3>

      {/* Task 2: Create a dropdown menu (using <select>) to choose a tour destination. */}
      <div className="dropdown">
        <label htmlFor="destinations" className="tours-label">Tours Available:</label> {/* Label for dropdown */}
        <select
          id="destinations"
          value={selected} // Current selected destination
          onChange={(e) => setSelected(e.target.value)} // Task 2: Update selected destination on change
        >
          {destinations.map((destination, index) => ( // Mapping through destinations to create options
            <option key={index} value={destination}> {/* Option for each destination */}
              {destination === "All" ? "All Destinations" : destination} {/* Display "All Destinations" for "All" option */}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DestinationSelector; // Exporting DestinationSelector component

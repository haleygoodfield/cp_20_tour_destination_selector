import React from 'react'; // Importing React

const DestinationSelector = ({ tours, selected, setSelected }) => { // DestinationSelector component
  const destinations = ["All", ...new Set(tours.map((tour) => tour.name))]; // Getting unique destinations from tours data

  return ( // Rendering the component
    <div className="destination-selector"> {/* Container for destination selector */}
      <h2>Select Your Destination</h2> {/* Heading for destination selector */}
      <div className="dropdown">
        <label htmlFor="destinations">Select a Destination:</label> {/* Label for dropdown */}
        <select
          id="destinations"
          value={selected} // Current selected destination
          onChange={(e) => setSelected(e.target.value)} // Update selected destination on change
        >
          {destinations.map((destination, index) => ( // Mapping through destinations to create options
            <option key={index} value={destination}> {/* Option for each destination */}
              {destination}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DestinationSelector; // Exporting DestinationSelector component

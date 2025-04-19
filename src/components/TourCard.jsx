import React, { useState } from 'react'; // Importing React

const TourCard = ({ id, image, info, price, name, onRemove }) => { // TourCard component
  const [readMore, setReadMore] = useState(false); // State to toggle read more/less

  return (
    // TourCard component structure
    <article className="tour-card"> 
      <img src={image} alt={name} /> {/* Image of the tour */}
      <footer>
        <div className="tour-info"> {/* Tour information */}
          <h4>{name}</h4>
          <h4 className="price">Total Cost: ${price}</h4> {/* Price of the tour */}
        </div>
        <p> 
          {readMore ? info : `${info.substring(0, 150)}...`} {/* Tour info with read more functionality */}
          </p>
           {/* Grouping the buttons onto one line */} 
           <div className="btn-group">
            <button className="btn btn-readmore" onClick={() => setReadMore(!readMore)}> {/* Toggle read more/less */}
            {readMore ? 'Show Less' : 'Read More'} 
          </button>
        <button className="btn btn-remove" onClick={() => onRemove(id)}> {/* Remove tour button */}
          Not Interested {/* Button to remove the tour */}
        </button>
        </div>
      </footer>
    </article>
  );
};

export default TourCard; // TourCard component
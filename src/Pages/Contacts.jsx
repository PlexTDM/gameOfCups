import { useState, useEffect } from 'react'; // Import useState and useEffect
import './Contacts.css';

const Contacts = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after the component mounts (on reload)
    setIsLoaded(true);
  }, []);  // Empty dependency array ensures this runs only once when the component mounts

  return (
    <section>
      {/* Title 1 component */}
      <div className={`title1 slide-up ${isLoaded ? 'show' : ''}`}>
        <p className="cont"> CONTACTS </p>
        <p className="title2">
          Conquer the Seven Kingdoms <br /> Connecting with Us
        </p>
      </div>

      {/* Symptom and content */}
      <div className={`symptom slide-up ${isLoaded ? 'show' : ''}`}>
        <div>
          <p className="title3">Game of Cups</p>
          <p className="grey">
            Game of Cups ©2024. <br />
            All rights reserved
          </p>
          <span className="app">
            <a href="#">Instagram</a>
            <a href="#">WatsApp</a>
            <a href="mailto:INFO@GAMEOFCUPS.COM">INFO@GAMEOFCUPS.COM</a>
          </span>
        </div>
        <div className="image-container">
          <img
            src="https://optim.tildacdn.com/tild3931-3661-4839-a435-623939386162/-/format/webp/footer_main.jpg"
            alt="Footer image"
            className={`image ${isLoaded ? 'appear' : ''}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Contacts;

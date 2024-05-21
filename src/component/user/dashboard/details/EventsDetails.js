import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSelectedItemImage } from '../../../redux/action/actions';
import Navbar from '../../../layout/Navbar';


const EventsDetails = () => {
  const [imageError, setImageError] = useState(false);
  const selectedItemImage = useSelector(state => state.selectedItemImage);
  const dispatch = useDispatch();

  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    // Load image URL from local storage when component mounts
    const savedImage = localStorage.getItem('selectedItemImage');
    if (savedImage) {
      dispatch(updateSelectedItemImage(savedImage));
    }
  }, [dispatch]);

  useEffect(() => {
    // Save image URL to local storage when selectedItemImage changes
    if (selectedItemImage) {
      localStorage.setItem('selectedItemImage', selectedItemImage);
    }
  }, [selectedItemImage]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (id) => {
      if (activeDropdown === id) {
          setActiveDropdown(null);
      } else {
          setActiveDropdown(id);
      }
  };

  const info = [
      {
          name: 'Places to go',
          path: '',
          id: 1
      },
      {
          name: 'Things to do',
          id: 2
      },
      {
          name: 'Festivals & Events',
          id: 3
      },
      {
          name: 'Plan Your Trip',
          id: 4
      },
      {
          name: 'Travel Updates',
          path: '/travelupdate',
          id: 5
      },
    ]
  return (
    <div className="container mx-auto relative">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} info={info} activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} />
      {selectedItemImage && (
        <div>
          {imageError ? (
            <p>Error: Failed to load image</p>
          ) : (
            <img src={selectedItemImage} alt="error" onError={handleImageError}  className='Fdetailimage'/>
          )}
        </div>
      )}
    </div>
  );
};

export default EventsDetails ;

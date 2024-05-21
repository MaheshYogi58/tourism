import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSelectedItemImage } from '../../../redux/action/actions';
import Navbar from '../../../layout/Navbar';


const Details = () => {
  const [imageError, setImageError] = useState(false);
  const selectedItem = useSelector(state => state.selectedItemImage);
  const dispatch = useDispatch();

  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    // Load image URL and description from local storage when component mounts
    const savedData = localStorage.getItem('selectedItem');
    if (savedData) {
      dispatch(updateSelectedItemImage(JSON.parse(savedData)));
    }
  }, [dispatch]);

  useEffect(() => {
    // Save image URL and description to local storage when selected item changes
    if (selectedItem) {
      localStorage.setItem('selectedItem', JSON.stringify(selectedItem));
    }
    
  }, [selectedItem]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const info = [
    { name: 'Places to go', path: '', id: 1 },
    { name: 'Things to do', id: 2 },
    { name: 'Festivals & Events', id: 3 },
    { name: 'Plan Your Trip', id: 4 },
    { name: 'Travel Updates', path: '/travel-updates', id: 5 },
    
  ];

  return (
    <div className="container mx-auto relative">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} info={info} activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} />
      {selectedItem && (
        <div>
          {imageError ? (
            <p>Error: Failed to load image</p>
          ) : (
            <img src={selectedItem.image} alt="error" onError={handleImageError} className="Sdetailimage" />
          )}
          <div>{selectedItem.description}</div>
          
          
        </div>
      )}
    </div>
  );
};

export default Details;

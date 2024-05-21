import React, { useState } from 'react'
import Navbar from '../../../../layout/Navbar';
import PlanYourTrip from '../../../../nav/PlanYourTrip';
import ThingsToDo from '../../../../nav/ThingsToDo';
import PlacesToGo from '../../../../nav/PlacesToGo';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer';

const PashupatiArati = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navigate = useNavigate();
    const handleItemClick = (item) => {
      if (item.path) {
          navigate(item.path);
      } else {
          // Handle other item click actions
          console.log(`Clicked on ${item.name}`);
      }
  };
  
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
        component: PlacesToGo,
        id: 1
      },
      {
        name: 'Things to do',
        component: ThingsToDo,
        id: 2
      },
    
      {
        name: 'Plan Your Trip',
        component: PlanYourTrip,
        id: 4
      },
      {
        name: 'TravelUpdates',
        path: '/travelupdate',
        id: 5
    },
    ];
  return (
    <div>

    <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} info={info} activeDropdown={activeDropdown} toggleDropdown={toggleDropdown}  handleItemClick={handleItemClick} />
   <div>
      <img src='./images/Pashupati_Arati.jpg' className='Everest-img' />
      </div>
      <div className="head">
      <div className="body">
      <div className="details">
        <h1 className="title">Sawane Sankranti</h1>
        <p className="description">The month of Shrawan, starting mid July, is held auspicious in the Nepali culture. The whole month is devoted to Shiva. Devotees visit
         the Shiva Shakti temples in different parts of Nepal. Women, young to elderly, married and unmarried, celebrate Shiva by wearing green
          (the color of nature in monsoon and the color of fertility), fasting and offering special prayers for long-life and harmony. Pashupatinath 
          in Kathmandu is thronged by devotees during this month. Devout pilgrims of Bol Bam are also seen in saffron apparels all over the country
           during the month as the Himalayan region of Nepal is considered sacred especially in reference to ancient Shiva Shakti tales and legends. 
           The first day of this month is the Sawane Sankranti, when families get together to enjoy good food and quality time. </p>
        <div><img src='./images/swani.jpeg' alt='image' /></div>
       
      

      </div>
    </div>
  </div>
  <div className=' md: pt-20'>  <Footer/> </div>
  </div>
  )
}

export default PashupatiArati

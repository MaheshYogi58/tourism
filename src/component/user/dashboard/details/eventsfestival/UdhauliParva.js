import React, { useState } from 'react'
import Navbar from '../../../../layout/Navbar';
import PlanYourTrip from '../../../../nav/PlanYourTrip';
import ThingsToDo from '../../../../nav/ThingsToDo';
import PlacesToGo from '../../../../nav/PlacesToGo';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer';

const UdhauliParva = () => {
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
      <img src='./images/udhaui_parva.jpg' className='Everest-img' />
      </div>
      <div className="head">
      <div className="body">
      <div className="details">
        <h1 className="title">Udhauli Parva</h1>
        <p className="description">The Kirats celebrate Udhauli Parva to thank nature for providing them with a plentiful harvest.
         It is an annual festival when people from the hills migrate to the lower regions to avoid the harsh winters of the Himalayas.
          These communities stay in the lowlands until the arrival of Ubhauli in the summer, when they return to their houses. 
          These celebrations are also known as Sakela by Nepali people. Kirat population, who live an agrarian lifestyle that 
          includes ancestor worship and Shaman rituals. </p>
       

      </div>
    </div>
  </div>
  <div className=' md: pt-20'>  <Footer/> </div>
  </div>
  )
}

export default UdhauliParva

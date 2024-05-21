import React, { useState } from 'react'
import Navbar from '../../../../layout/Navbar';
import { useNavigate } from 'react-router-dom';
import PlacesToGo from '../../../../nav/PlacesToGo';
import ThingsToDo from '../../../../nav/ThingsToDo';
import PlanYourTrip from '../../../../nav/PlanYourTrip';
import Footer from '../../Footer';


const Yamori = () => {
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
      <img src='./images/yomari_traditional.jpeg' className='Everest-img' />
      </div>
      <div className="head">
      <div className="body">
      <div className="details">
        <h1 className="title">Relish the taste of a juicy Yomari at a local Newari eatery this Yomari Punhi!</h1>
        <p className="description">Yomari Punhi is an auspicious day for the Newari community. On this day Kathmandu Valley residents worship Annapurna, the goddess of crops and food, and pray for a good rice harvest. </p>
        <div><img src='./images/yam.jpg' alt='image' /></div>
        <p className="description">Yomari is unquestionably one of the most popular Newari food items. It is a steamed fish-shaped dumpling covered in new-harvest rice flour and filled with chaku (molasses) or khuwa (condensed milk) and sesame seeds. Yomari is wholesome, delicious and nutritious dessert for snacks. </p>
        <div >
        <img src='./images/yomari_tr.jpg' alt='image'  /> 
        </div>
        <p className="description">It is believed that a Newari couple in Panauti, Kathmandu Valley, experimented with the first lot of rice harvest and molasses and came up with Yomari. The combination was appreciated by all and the cooking of the sweetmeat during special occasions became a tradition as time passed. As the food was liked by all, the bread was named Yomari, which literally means ‘tasty bread’ in Newari language.</p>
       
        
       
      

      </div>
    </div>
  </div>
  <div className=' md: pt-20'>  <Footer/> </div>
  </div>
    
  )
}

export default Yamori

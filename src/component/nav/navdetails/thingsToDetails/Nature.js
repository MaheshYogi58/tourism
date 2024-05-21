import React, { useState } from 'react'
import Navbar from '../../../layout/Navbar';
import PlanYourTrip from '../../PlanYourTrip';
import ThingsToDo from '../../ThingsToDo';
import PlacesToGo from '../../PlacesToGo';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../user/dashboard/Footer';

const Nature = () => {
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
      name: 'Travel Updates',
      path: '/travel-updates',
      id: 5
    },
  ];

  return (
    <div>

    <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} info={info} activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} handleItemClick={handleItemClick} />
   <div>
      <img src='./images/nature.jpg' alt='Mount Everest' className='Everest-img' />
      </div>
      <div className="head">
      <div className="body">
      <div className="details">
        <h1 className="title">Natural Beauty of Nepal</h1>
        <p className="description">Nepal is blessed with innumerable gifts of nature. The country has tremendous geographical and topological diversity that divides the country into Terai, Hilly, and Himalayan Regions. From lowlands to snow-capped mountains, the weather also diverse in these regions. There are many big rivers that flow beautifully, deep lakes, greeny forests, mountains, and high snow-capped mountains that are breathtaking. </p>
        <p className="description">Wherever you are in Nepal, you will always be surrounded by the view of its natural beautiful scenario. The mesmerizing morning sunrise and sunset can be witnessed from hilly stations like Nagarkot, Sarangkot, Dhulikhel, Daman, and plains like Sauraha (Chitwan National Park).</p>
       <div className=' md: flex '>
         
        </div>
        <p className="description">The beautiful nature brings a feeling of harmony, peace, and serenity. To explore these natural beauties of Nepal, tourist can choose the plan of trekking, driving tour or small hiking.</p>
      
      </div>
    </div>
  </div>
  <div className=' md: pt-20'>  <Footer/> </div>
  </div>
  )
}

export default Nature

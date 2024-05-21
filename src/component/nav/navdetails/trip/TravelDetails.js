import React, { useState } from 'react'
import Navbar from '../../../layout/Navbar';
import PlacesToGo from '../../PlacesToGo';
import ThingsToDo from '../../ThingsToDo';
import PlanYourTrip from '../../PlanYourTrip';
import Footer from '../../../user/dashboard/Footer';
import { useNavigate } from 'react-router-dom';


const TravelDetails = () => {
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

    <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} info={info} activeDropdown={activeDropdown} toggleDropdown={toggleDropdown}  handleItemClick={handleItemClick}/>
   <div>
      <img src='./images/lumb.jpg' className='Everest-img' />
      </div>
      <div className="head">
      <div className="body">
      <div className="details">
        <h1 className="title">Lumbini</h1>
        <h2 className="subtitle">Lumbini, the birthplace of lord Budhha and home to world-renowned monasteries, is the third-largest province in Nepal. The province is named after the holy pilgrimage site of Lumbini in the Rupandehi District. With an area of 22,288 square kilometers (8,605.44 sq. mi), the province covers about 15.1% of the country's total area. Lumbini has a humid subtropical climate and experiences four seasons. The largest national park in the Terai, Bardia National Park is also situated in this province and consists of a beautiful, unblemished wilderness filled with Sal forests, diverse flora and fauna, and alluvial washes of the Karnali River. Rani Mahal, which was a palace built in Palpa in 1893, still stands alongside the Gandaki river. </h2>
        <div><img src='./images/lumbini4.jpeg' alt='image' className=' h-64'/></div>
      
      </div>
    </div>
  </div>
  <div className=' md: pt-20'>  <Footer/> </div>
  </div>
  )
}

export default TravelDetails

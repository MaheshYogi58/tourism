import React, { useState } from 'react';
import Navbar from '../../layout/Navbar';
import PlacesToGo from '../PlacesToGo';
import ThingsToDo from '../ThingsToDo';

import PlanYourTrip from '../PlanYourTrip';
import { useNavigate } from 'react-router-dom';
import Footer from '../../user/dashboard/Footer';


const Everest = (props) => {
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
        <img src='./images/Everest_tk_trekker_(5)-1630474503.jpg' alt='Mount Everest' className='Everest-img' />
        </div>
        <div className="head">
        <div className="body">
        <div className="details">
          <h1 className="title">Mt. Everest (8,848 m)</h1>
          <h2 className="subtitle">Climb Everest if you want to stand on top of the world, or do the extremely popular Everest Base Camp Trek to enter a strange world of ice and snow.</h2>
         
          <p className="description">Reach the highest point on earth or choose to live out your dream by standing at the foot of Mt. Everest (8,848 m).</p>
          <p className="description">The Everest region in Nepal is more than just climbing and trekking, it is a life-changing experience and some see it as a journey close to achieving Nirvana. Located in the northeastern province of Nepal, this region is in a world of its own with vast glaciers, icefalls, the highest mountains, deep valleys, precarious settlements, and hardy people challenging the harshest conditions thrown at them by nature in the thin air of high altitude.</p>
       
          <div>
          <img src='./images/mount.jpeg' alt='image' className=' md: h-96 w-10/12 py-5 px-5'  /> 
          </div>
         
         
          <p className="description">Passing through legendary Sherpa villages, the trek is a mix of deep cultural and spiritual experiences and physical challenges that test your strength and endurance. Buddhist lamas, monks, and nuns led by Rinpoches (reincarnate at mas) serve the predominantly Sherpa communities from their gompas (monasteries).</p>
          <p className="description">The journey to Everest or Everest Base Camp begins with a dramatic flight from Kathmandu to Lukla, after which you hike up the Everest region to reach your destination in the Himalayas.</p>
        </div>
      </div>
    </div>
    <div className=' md: pt-20'>  <Footer/> </div>
    </div>
  );
};

export default Everest;

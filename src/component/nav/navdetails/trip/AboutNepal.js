import React, { useState } from 'react'

import PlacesToGo from '../../PlacesToGo';
import ThingsToDo from '../../ThingsToDo';
import PlanYourTrip from '../../PlanYourTrip';
import Navbar from '../../../layout/Navbar';
import { useNavigate } from 'react-router-dom';
import { Footer } from 'antd/es/layout/layout';

const AboutNepal = () => {

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
      <img src='./images/about.jpeg' className='Everest-img' />
      </div>
      <div className="head">
      <div className="body">
      <div className="details">
        <h1 className="title">Nepal Tourism </h1>
        
        <p className="description">Nepal with rich ancient cultures set against the most dramatic scenery in the world is a land of discovery
         and unique experience. For broad minded individuals who value an experience that is authentic and mesmerizing, Nepal is the ideal destination.
          Come and revel in the untouched and the undiscovered and uncover yourself.</p>
        <p className="description">It is unsurpassed that the sheer diversity Nepal boasts, from steamy jungle and Terai to the icy peaks of the world’s 
        highest mountains means that the range of activities on offer. Trekking, mountaineering, rafting in spectacular scenery are just three things Nepal
         is famous for. Activities as diverse as Elephant Polo and a micro-light flight through the Himalayas show that in Nepal, the only boundary is your 
         imagination. With 15 National & Wildlife Parks (two are UNESCO Heritage sites) Nepal is one of the last places on earth you can spot the Asiatic 
         rhinoceros and the Royal Bengal Tiger.</p>
        <p className="description">For many, Nepal’s greatest attraction is its people. The traditions and famous hospitality of its many different groups are indeed a major part of what makes Nepal so special. From remote mountain villages to medieval hill-towns and the ancient cities of the Kathmandu Valley, the people of Nepal are always welcoming. Come and experience the strong and unique flavors of Nepalese cuisine, prepared with love and a depth of flavor or join in and celebrate at one of the many festivals year round. In fact, with more festivals than days of the year, there is nowhere else in the world that can offer as many festivities as Nepal.</p>
        <p className="description">Tourism is one of the mainstay of Nepalese economy. It is also a major source of foreign exchange and revenue. Possessing 8 of the 10 highest mountains in the world, Nepal is a hotspot destination for mountaineers, rock climbers and people seeking adventures. The Hindu, Buddhist and other cultural heritage sites of Nepal, and around the year fair weather are also strong attractions.</p>
        <p className="description">Nepal is the country of the Mount Everest, the highest mountain peak in the world, and the Birthplace of Gautama Buddha- Lumbini. Mountaineering and other types of adventure tourism and ecotourism are important attractions for visitors. There are other important religious pilgrimage sites throughout the country for the followers of various sects and religions.</p>
        <div> 
          <h1> </h1>
           <p className="description"></p>
        </div>
      
        <div> 
          <h1> </h1>
           <p className="description"></p>
        </div>
        <div> 
          <h1> </h1>
           <p className="description"></p>
        </div>
        <div> 
          <h1> </h1>
           <p className="description"></p>
        </div>
        <div> 
          <h1> </h1>
           <p className="description"></p>
        </div>
        <div> 
          <h1> </h1>
           <p className="description"></p>
        </div>
        
      
      </div>
    </div>
  </div>
  <div className=' md: pt-20'>  <Footer/> </div>
  </div>
  )
}

export default AboutNepal

import React, { useState } from 'react'
import PlacesToGo from '../../../../nav/PlacesToGo';
import ThingsToDo from '../../../../nav/ThingsToDo';
import PlanYourTrip from '../../../../nav/PlanYourTrip';
import Navbar from '../../../../layout/Navbar';
import Footer from '../../Footer';

const About = () => {
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
       <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} info={info} activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} />
     <div>
    <img src='./images/new.jpg' className='Everest-img ' />
    
     </div>
     <div className="head">
      <div className="body">
      <div className="details">
        <h1 className="title">AboutUs</h1>
        
        <p className="description">Nepal Tourism Board is a national tourism organization 
        of Nepal established in 1998 by an Act of Parliament in the form of partnership between 
        the Government of Nepal and private sector tourism industry to develop and market Nepal as 
        an attractive tourist destination. The Board provides platform for vision-drawn leadership for 
        Nepal’s tourism sector by integrating Government commitment with the dynamism of private sector.</p>
        <p className="description">NTB is promoting Nepal in the domestic and international market and is working
         toward positioning the image of the country. It also aims to regulate product development activities. Fund for 
         NTB is collected in the form of Tourist Service Fee from departing foreign passengers at the Tribhuvan International 
         Airport, Kathmandu, thus keeping it financially independent. The Board chaired by the Secretary at the Ministry of Tourism 
         and Civil Aviation consists of 11 Board Members with five Government representatives, five private sector representatives and 
         the Chief Executive Officer.</p>
        <p className="description"></p>
      
      
        </div>
        </div>
        </div>
        <div className=' md: pt-20'>  <Footer/> </div>
    </div>
  )
}

export default About

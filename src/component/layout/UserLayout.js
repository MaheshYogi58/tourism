import React, { useState } from 'react';


import Dashboard from '../user/dashboard/Dashboard';
import Footer from '../user/dashboard/Footer';
import Navbar from './Navbar'; 
import PlacesToGo from '../nav/PlacesToGo';
import ThingsToDo from '../nav/ThingsToDo';

import PlanYourTrip from '../nav/PlanYourTrip';
import { useNavigate } from 'react-router-dom';


const UserLayout = () => {
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
        <div className="container mx-auto relative">
            <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} info={info} activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} handleItemClick={handleItemClick} />
            
            <div className="grid md:grid-cols-2 gap-4 pt-7 md:flex md:flex-col">
                <div className="conimage">
                    <img src="/images/first.jpg" alt="no image" className="w-full" />
                </div>
                <div className="context">
                    <h1 className="htext md:text-6xl">Official Website Of</h1>
                    <h1 className="hhtext md:text-6xl">Nepal Tourism</h1>
                </div>
            </div>

            <div>
                <Dashboard />
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}

export default UserLayout;

import React, { useState } from 'react'
import Navbar from '../../../layout/Navbar';
import PlacesToGo from '../../PlacesToGo';
import ThingsToDo from '../../ThingsToDo';
import PlanYourTrip from '../../PlanYourTrip';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../user/dashboard/Footer';

const BookYourTicket = () => {
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
      <img src='./images/Mustang_valley.jpeg' className='Everest-img' />
      </div>
      <div className="head">
      <div className="body">
      <div className="details">
        <h1 className="title">Book your Nepal venture with an agency that promises the kind of experience you are looking for.</h1>
        <p className="description"> Planning a trip to Nepal can be an enjoyable and easy experience. Book your once-in-a-life trek with 
        a reputable trekking agency, book a tour through the country's best spots with a promising tour operator or book your last-minute
         adventurous jungle safari from a local travel agency.</p>
         <p className="description">Find out more or choose a service provider through:</p>
         <p className="description">Nepal Association of Travel & Tour Agents (NATTA) at www.natta.org.np  </p>
         <p className="description">Nepal Association of Tour Operators (NATO) at www.nepaltouroperators.org.np</p>
         <p className="description">Trekking Agencies’ Association of Nepal (TAAN) at www.taan.org.np</p>
         <p className="description">Society of Travel & Tour Operators – Nepal (SOTTO) at www.sottonepal.org</p>
         <img src='./images/book.jpg' className='Everest-img py-10' />
         <h1 className="title">Book your flights to Nepal now. </h1>
         <p className="description">Nepal Airlines is the national flag carrier of Nepal with flights to/and from Delhi, Mumbai, Kuala Lumpur, Dubai, Bangalore, Bangkok, Doha, Hong Kong and Osaka. Other international airlines operating from and to Kathmandu are:

</p>
<div>
         <ul className=' list-disc'> 
          <li> 
          Air Arabia (Sharjah)
          </li>
          <li>Air India (Delhi, Kolkata)</li>
          <li>Air India (Delhi, Kolkata)</li>
          <li>Biman Bangladesh (Dhaka)</li>
          <li>Buddha Airlines (Varanasi, Kolkata)</li>
          <li>China Eastern Airlines (Kunming)</li>
          <li>China Southern Airlines (Guangzhou)</li>
          <li>Dragon Air ( Hong Kong)</li>
          <li>Druk Air (Delhi, Paro)</li>
          <li>Etihad Airways (Abu Dhabi)</li>
          <li>Flydubai (Dubai)</li>
          <li>Himalaya Airlines (Dammam, Doha, Dhaka)</li>
          <li>Indigo Airlines (Delhi)</li>
          <li>Korean Air (Seoul)</li> 
          <li>Malaysian Airlines (Kuala Lumpur)</li>
          <li>Malindo Air (Kuala Lumpur)</li>
          <li>Oman Airlines (Muscat)</li>
          <li>Qatar Airways (Doha)</li>
          <li>Salam Air (Muscat)</li>
          <li>Sichuan Airlines (Chengdu, Lhasa)</li>
          <li>Silk Air (Singapore)</li>
          <li>Thai Airways (Bangkok)</li>
          <li>Thai Lion (Bangkok)</li>
          <li>Tibet Airlines (Chengdu, Xian)</li>
          <li>Turkish Airlines (Istanbul)</li>
         </ul>

         </div>
      </div>
    </div>
  </div>
  <div className=' md: pt-20'>  <Footer/> </div>
  </div>
  )
}

export default BookYourTicket

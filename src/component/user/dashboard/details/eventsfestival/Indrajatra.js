import React, { useState } from 'react'
import Navbar from '../../../../layout/Navbar';
import PlanYourTrip from '../../../../nav/PlanYourTrip';
import ThingsToDo from '../../../../nav/ThingsToDo';
import PlacesToGo from '../../../../nav/PlacesToGo';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer';

const Indrajatra = () => {
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
      <img src='./images/udhauli.jpg' className='Everest-img' />
      </div>
      <div className="head">
      <div className="body">
      <div className="details">
        <h1 className="title">Watch the exciting festival of chariot processions, masked dances, religious enactments, lights, color & Living Goddess Kumari as the center of celebrations.</h1>
        <p className="description">The eight-day long Indra Jatra festival falls in September and is one of the most exciting and revered festivals of the Newar community of the Kathmandu Valley. This also marks the beginning of a month-long festival season of autumn. It begins with the erection of a wooden pole made of pine at Basantapur Sqaure in front of the old Hanuman Dhoka Palace. </p>
        <div><img src='./images/indi.jpg' alt='image' className=' h-96 py-5 px-10' /></div>
        <p className="description">For the pole-raising ceremony, hundreds of spectators gather at the Palace Square and on the surrounding temples. The chariot of Kumari, the Living Goddess, is taken out in a procession through the main streets of Kathmandu.</p>
       
          <div >
        <img src='./images/udhaui_parva.jpg' alt='image'  className=' md: py-8 px-10' /> 
        </div>
        <p className="description"> Masked dancers known as Lakhay take to the streets almost every evening accompanied by loud drums. The festival commemorates the time when Indra came down from heaven in human form to look for an herb. </p>
        <div>
        <img src='./images/INDRA.jpg' alt='image' /> 
        </div>
        <p className="description"> Each night of Indra Jatra the shrines and ancient palace buildings around Kathmandu Durbar Square are aglow with oil wicks. Each night on the platform in front of the temple of the Living Goddess, there is an enactment depicting the ten earthly incarnations of Lord Vishnu. The large image of Akash Bhairab's head is put on display out in the open directly facing his temple at Indra Chowk. </p>
        <div>  <img src='./images/indrajatra.jpeg' alt='image' className=' md: py-8 px-12' />  </div>
       
       <p className="description"> In the afternoon of the day before full moon, ecstatic mobs gather near Hanuman Dhoka Palace for the long-awaited Living Goddess’ chariot procession to catch a glimpse of the revered little Newar girl who has been deified as Kumari representing Goddess Taleju. </p>
       <p className="description"> The chariot of the Kumari followed by two other smaller chariots carrying a representative of Ganesh and Bhairav is taken to different parts of the old Kathmandu through the narrow alleys where people gather to watch and py homage. The festival of Indra Jatra ends with the lowering of the (lingam) pole bearing Indra's flag amidst religious ceremonies. </p>
      </div>
    </div>
  </div>
  <div className=' md: pt-20'>  <Footer/> </div>
  </div>
  )
}

export default Indrajatra

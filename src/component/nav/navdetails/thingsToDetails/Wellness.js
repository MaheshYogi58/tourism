import React, { useState } from 'react'
import Navbar from '../../../layout/Navbar';
import PlanYourTrip from '../../PlanYourTrip';
import ThingsToDo from '../../ThingsToDo';
import PlacesToGo from '../../PlacesToGo';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../user/dashboard/Footer';

const Wellness = () => {
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
      <img src='./images/cudhaui_parva.jpg' alt='Mount Everest' className='Everest-img' />
      </div>
      <div className="head">
      <div className="body">
      <div className="details">
        <h1 className="title">Wellness</h1>
        <h2 className="subtitle">With the rising trend of maintaining a better and healthy lifestyle among the millennial population, the wellness
         industry in the global market is expanding to a bigger extent. The growing awareness of the importance of diet, fitness, and health practices
          triggered this transformation of the wellness sector.</h2>
       <div>
        <h2>Wellness Tourism</h2>
        <p className="description">Wellness tourism is travel with the motive of maintaining health and wellbeing through physical, psychological, or spiritual
         practices. It is often melded with medical tourism as both are related to health. Wellness travelers are more 
         likely to the proactive travel with the purpose of promoting or maintaining a healthy lifestyle, whereas medical tourists generally 
         travel seeking treatment for the diagnosed conditions.

In Nepal, the wellness industry is flaunting with the implementation of traditional Yoga, Meditation, and Ayurveda practices.</p>
</div>
<div>
  <h2>Yoga, Meditation, and Ayurveda</h2>
        <p className="description">Yoga and Meditation are an integral part of Ayurvedic practices. Yoga and Ayurveda are the inseparable sisters that originated from
         the knowledge of Hindu Vedas, the oldest books known on earth that incorporate information on all aspects of society and life - politics, economics, religion, science, mathematics, architecture, and so on.</p>
         </div>
         <div >
        <img src='./images/yoga.jpg' alt='image' className=' md: py-10 px-10' /> 
        </div>
       
        <div>
          <h2>Nepal as Spiritual and Wellness Destination</h2>
          <p className="description">More than just tours and treks in the spectacular destination of the planet, Nepal offers Spiritual and Wellness Tours for peace of mind and body. With the numerous ancient temples and pilgrimage sites located at the lush valleys and the mystical mountains, Nepal is a unique destination for exploration. Also, the traditional medicinal practices and therapies to enhance wellbeing will help you to discover the social settlement of the people.</p>
        <p className="description">Nepal is a multi-religious country with people living in perfect harmony. Buddhists and Hindus are the major residents. Nepal is one of the best Buddhist pilgrimage sites in the world to experience Tibetan Buddhism and other branches as well. There are thousands of years old Buddhist monasteries and Hindu temples which are important for pilgrimage for religious aspects.</p>
        <p className="description"> The deep faith in religion from the age-old to the young ones can be a lifetime experience how they pay their homage to their belief even in early morning chanting of the mantra. How balanced their lifestyle with their beliefs and home remedies which are still in practice. The unique richness of Nepali biodiversity and a wide variety of Himalayan medicinal herbs, the local knowledge of preserving them as that have been practiced through generations.</p>
       <p className="description">Nepal would be the best destination to get connected with nature while hiking through the Himalayas and wandering around the peaceful town, being spiritual with the religious teachings and purifying the body and soul with traditional yoga, meditation, and ayurvedic treatment.</p>
        </div>
       
      </div>
    </div>
  </div>
  <div className=' md: pt-20'>  <Footer/> </div>
  </div>
  )
}

export default Wellness

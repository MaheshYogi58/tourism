import React, { useState } from 'react'
import Navbar from '../../layout/Navbar';
import PlacesToGo from '../PlacesToGo';
import ThingsToDo from '../ThingsToDo';
import PlanYourTrip from '../PlanYourTrip';
import { useNavigate } from 'react-router-dom';
import Footer from '../../user/dashboard/Footer';

const Kathmandu = () => {
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
      <img src='./images/kath.jpeg' className='Everest-img' />
      </div>
      <div className="head">
      <div className="body">
      <div className="details">
        <h1 className="title">Kathmandu Valley (8,848 m)</h1>
        <h2 className="subtitle">Kathmandu Valley comprises the three ancient cities of Kathmandu, Patan and Bhaktapur, which were once independent states ruled by the Malla kings from the 12th to the 18th centuries. The three cities house seven UNESCO World Heritage shrines which are together listed as a UNESCO World Heritage Site (Culture). The valley is also home to hundreds of other exquisite monuments, sculptures, artistic temples and magnificent art - reminders of the golden era in Nepal’s architecture. </h2>
        <div><img src='./images/kat.jpg' alt='image' /></div>
        <p className="description">Legend has it that the valley was once a primordial lake ringed by verdant mountains.  In this pristine lake lived giant serpents until one fine day, saint Manjushree, the Bodhisatva, raised a mighty sword and in one fell swoop, cut open the side of a mountain at a place now known as Chobar. The voluminous water of the lake gushed out, leaving behind a fertile valley capable of supporting large urban settlements over the millennia. The Gopala and Kirati dynasties were the earliest rulers here followed by the Licchavi (300-879 A.D.), under whom flourished trade and crafts. </p>
        <p className="description">But the valley’s remarkable cities with their ornate palaces, the superbly crafted pagodas, and the monumental stupas are testimony of the artistic genius of the Newars, the original inhabitants of the valley, whose skills were championed by the Malla kings and appreciated even by the Mongol rulers of 18th century China.</p>
       <div className=' md: flex '>
          <div >
        <img src='./images/kathmandu1.jpeg' alt='image' className=' md: h-80 w-96 ' /> 
        </div>
        <div>
        <img src='./images/kathmandu3.jpeg' alt='image' className=' h-80 w-96 px-5'/> 
        </div>
        </div>
        <p className="description">Passing through legendary Sherpa villages, the trek is a mix of deep cultural and spiritual experiences and physical challenges that test your strength and endurance. Buddhist lamas, monks, and nuns led by Rinpoches (reincarnate at mas) serve the predominantly Sherpa communities from their gompas (monasteries).</p>
        <p className="description">The journey to Everest or Everest Base Camp begins with a dramatic flight from Kathmandu to Lukla, after which you hike up the Everest region to reach your destination in the Himalayas.</p>
      </div>
    </div>
  </div>
  <div className=' md: pt-20'>  <Footer/> </div>
  </div>
);
}

export default Kathmandu

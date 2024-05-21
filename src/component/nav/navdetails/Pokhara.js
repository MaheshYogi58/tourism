import React, { useState } from 'react'
import Navbar from '../../layout/Navbar';
import PlacesToGo from '../PlacesToGo';
import ThingsToDo from '../ThingsToDo';
import PlanYourTrip from '../PlanYourTrip';
import { useNavigate } from 'react-router-dom';
import Footer from '../../user/dashboard/Footer';

const Pokhara = () => {
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

    <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} info={info} activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} handleItemClick={handleItemClick}  />
   <div>
      <img src='./images/pokhara.jpg' className='Everest-img' />
      </div>
      <div className="head">
      <div className="body">
      <div className="details">
        <h1 className="title">Pokhara</h1>
        <h3 className="subtitle">Pokhara’s tranquil beauty has been the subject of inspiration for many travel writers. Its pristine air, spectacular backdrop of snowy peaks, blue lakes and surrounding greenery make it ‘the jewel in the Himalaya’, a place of remarkable natural disposition. With the magnificent Annapurna range forming the backdrop and the serenity of the Cluster of 9 Lakes with three major ones - Phewa, Rupa and Begnas – Pokhara is a great destination for a weekend getaway as well as a long relaxing holiday. Pokhara Valley, gateway to the Annapurna region where many a trekker finds his Shangri-la, sits high on the list of ‘must visit’ places in Nepal.</h3>
        <div><img src='./images/pokhara3.avif' alt='image' /></div>
        <p className="description">Pokhara once lay on the important trade route between India and Tibet. To this day, mule trains set up camps on the city outskirts, bringing goods from remote Himalayan regions including Mustang. Gurungs and Magars, who have earned world-wide fame as fierce Gurkha warriors, are predominant here. Thakalis, indigenous of the Thak Khola region of Mustang, are known for their entrepreneurship and run tea houses along the trek routes in the Annapurna region. The Pokhara is best known for the stunning view of the Annapurna range. It is perhaps one of the few places on earth from where mountains above 6,000 m can be seen unobstructed from an altitude of 800 m within the distance of 28 km.  </p>
        
       <div className=' md: flex '>
          <div >
        <img src='./images/pokhara1.jpeg' alt='image' className=' md: h-80 w-96 ' /> 
        </div>
        <div>
        <img src='./images/pokhara4.jpeg' alt='image' className=' h-80 w-96 px-5'/> 
        </div>
        </div>
        <h1 className="description">CLIMATE</h1>
        <p className="description">Pokhara is warmer than Kathmandu. Summers are warm and humid while winters are mild and pleasant. </p>
        <h1 className="description">ACCESS/ ACCOMMODATION</h1>
        <p className="description">One can fly directly into Pokhara from Kathmandu. One can also take a bus or drive to Pokhara from the border towns. Accommodation in Pokhara ranges from luxurious world-class hotels and resorts that provide modern services and amenities to comfortable lodges with basic amenities. </p>
      </div>
    </div>
  </div>
  <div className=' md: pt-20'>  <Footer/> </div>
  </div>
);
}

export default Pokhara

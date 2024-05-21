import React, { useState } from 'react'
import Navbar from '../../layout/Navbar';
import PlacesToGo from '../PlacesToGo';
import ThingsToDo from '../ThingsToDo';
import PlanYourTrip from '../PlanYourTrip';
import { useNavigate } from 'react-router-dom';
import Footer from '../../user/dashboard/Footer';

const Chitwan = () => {
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
      <img src='./images/Chitwan.jpg' className='Everest-img' />
      </div>
      <div className="head">
      <div className="body">
      <div className="details">
        <h1 className="title">Chitwan</h1>
        <h2 className="subtitle">Chitwan literally means “heart of the jungle”. The popular Inner Terai valley gets its name from Chitrasen, the Tharu King, who once ruled here. In the southwest corner of Bagmati Province, Chitwan lies between foothills of the Himalaya, the Mahabharat and Siwalik ranges. The region called Chitra Ban in earlier references used to be dense forest abounding in wild animals and resorted by recluse sages meditating deep in the forests. </h2>
        <div><img src='./images/chit.jpeg' alt='image' className=' h-96 px-12' /></div>
        <p className="description">You can also spend some quality time visiting the elephant and gharial breeding centers, a perfect way to educate kids about these animals and their life cycle. Observe local indigenous life by visiting a Tharu village, where you will be welcomed inside their traditional mud houses and treated as valued guests. Unwind next to campfire at the end of the watching the Tharu stick dance and listening to their soothing folk songs.
</p>
        <p className="description">
The climate in Chitwan is sub-tropical with hot and humid summers and mild winters.</p>
       <div className=' md: flex '>
          <div >
        <img src='./images/tiger.jpeg' alt='image' className=' md: h-80 w-96 ' /> 
        </div>
        <div>
        <img src='./images/chitwan3.jpeg' alt='image' className=' h-80 w-96 px-5'/> 
        </div>
        </div>
        <h1 className="description">ACCESS/ ACCOMMODATION</h1>
        <p className="description">The park headquarters at Kasara is 21 km from Bharatpur which is 20 minutes by air or 145 km by road from Kathmandu. There are resorts and lodges of varying standards outside the national park that cater to the needs of tourists. Reservations can be made at the Kathmandu offices of the various resorts and lodges.</p>
      </div>
    </div>
  </div>
  <div className=' md: pt-20'>  <Footer/> </div>
  </div>
);
}

export default Chitwan

import React, { useState } from 'react'
import PlacesToGo from '../../PlacesToGo';
import ThingsToDo from '../../ThingsToDo';
import PlanYourTrip from '../../PlanYourTrip';
import Navbar from '../../../layout/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../user/dashboard/Footer';


const Advanture = () => {
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
      <img src='./images/adsport.jpg' alt='Mount Everest' className='Everest-img' />
      </div>
      <div className="head">
      <div className="body">
      <div className="details">
        <h1 className="title">Adventure In Nepal, Adventure Activities In Nepal</h1>
        
        <p className="description">Trekking and peak climbing are the most popular activities 
        
        among visitors to Nepal. The country is a paradise for novice and experienced climbers,
         offering the opportunity to experience the thrill of climbing a challenging 8,000m mountain.
         Its diverse geography and culture, as well as its stunning natural beauty, make Nepal an ideal 
         destination for trekking. A trek in the Himalayas of Nepal allows you to observe the culture and
          enjoy the beauty of nature. White water rafting on the Himalayan rivers is also a popular activity,
           offering the chance to coast on calm jade waters with stunning views or rush through roaring rapids.
            Rafting is a great way to explore Nepal, taking you through hamlets, canyons, virgin forests, and wildlife.</p>
       
        <p className="description">Jungle safaris in the Terai region are a popular way to see Nepal's rare animals and birds. 
        A journey through the lush green forests on the back of an elephant, crossing rivers and swamps, will give you the opportunity
         to observe the flora and fauna of Nepal and encounter rare animals and birds. Be prepared for a royal treat, as you may even 
         see the majestic Royal Bengal tiger.</p>
        <p className="description">Nepal's diverse terrain also makes it a great destination for mountain biking. This eco-friendly
         activity allows you to explore the country's magnificent landscape and vibrant culture, as well as its remarkable heritage. 
         Peddling on the hidden trails of rarely visited rural villages, you'll see smiling locals living simple lives in peace and harmony,
          practicing their own culture and speaking their own dialects.

</p>
<div> <img src='./images/adv.jpg' alt='image' className=' md: py-5' /> </div>
<p className="description">Another thrilling activity in Nepal is bungy jumping, which can be experienced on the 160m high Bhote Koshi
 Bridge, one of the wildest rivers in the world that rushes down from the Himalayas. Nepal also offers other adventure activities such 
 as birdwatching, canyoning, mountain expeditions, rock climbing, peak climbing, horseback riding, snowboarding, fishing, and even honey hunting.</p>
 <p className="description">Across Himalaya is a well-known and reputable government-licensed travel company that has
         been organizing rewarding adventures for travelers for several years. As a famous destination for adventure sports and 
         tours in Asia, Nepal is a top choice for adventure travelers. We take pride in the large number of satisfied and repeat 
         customers who visit us every year, and we look forward to extending the opportunity to share the adventure of a lifetime with you.</p>
      </div>
    </div>
  </div>
  <div className=' md: pt-20'>  <Footer/> </div>
  </div>
 
  )
}

export default Advanture

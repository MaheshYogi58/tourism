import React, { useState } from 'react'
import Navbar from '../../../layout/Navbar';
import PlanYourTrip from '../../PlanYourTrip';
import ThingsToDo from '../../ThingsToDo';
import PlacesToGo from '../../PlacesToGo';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../user/dashboard/Footer';

const Culture = () => {
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
      <img src='./images/cultmain.jpeg' alt='Mount Everest' className='Everest-img' />
      </div>
      <div className="head">
      <div className="body">
      <div className="details">
        <h1 className="title">Cultural Tours</h1>
        <h3 className="description">Take a cultural tour in Ktm Valley or take an ox cart village tour in the Tarai region to discover the real Nepal.</h3>
        
        <p className="description">Nepal is a melting pot of many cultures and religions all co-existing in perfect harmony. Take a cultural tour 
        in the Kathmandu Valley to discover the founders of the valley civilization, the Newars who even today occupy central Kathmandu which was the 
        original city. Or take an ox cart village tour in the Tarai region to truly discover how diverse the population of Nepal really is.</p>
        <p className="description"> The valley's pleasant climate and safety from floods and other natural disasters complemented by the fertile soil 
        attracted invaders to conquer and settle here. Various, mighty dynasties ruled Nepal through many centuries and brought together diverse cultures 
        and religions that thrive to this day.</p>
       <div>
       <img src='./images/culturaltours_oy_lt-1624505531.jpg' alt='image' className=' ' /> 
       </div>
        <p className="description">Depending on where you travel within Nepal, you will encounter people of various ethnic groups. The general distribution 
        goes like this: there are Newars in Kathmandu valley mixed with many different ethnic groups that migrated here. In the lower hills live the Brahmins 
        and Chettris along with many others. As you climb higher, you encounter Tamangs who generally live along the hilltops. Further up in the mountainous 
        region where it snows live the Sherpas who have adapted to the high altitude. The group known as Kirants live in the east also in the hilly and
         mountainous regions. There are many other groups spread around like the Magars and Gurungs. Religions vary from Hindu to Buddhist, to animists,
          to Christians and Muslims. The tribes living in the higher regions are generally Buddhist.</p>
          <p className="description"> Nepal is divided into three layers, according to its geographical settings - Himalayan region, Mid-hills, 
          and Tarai region (flat plains). Himalayan region is the home of the legendary Sherpas, who are renowned for climbing Mt. Everest. and many
           other peaks.</p>
           <p className="description">One of the first mountaineers to climb Mt. Everest was Tenzing Norgay along with Edmund Hillary from New Zealand.
            Sherpas follow Tibetan Buddhism, the "ancient school" by religion, they are  friendly in nature and share part of a culture of Tibet. Trek to 
            the northern-most region of Nepal to see the rich mix of culture and lifestyle.</p>  
       
          <div >
        <img src='./images/culture5.jpg' alt='image' /> 
        </div>
        
       
        <p className="description">Mid-hills of Nepal are populated by many hill tribes of Nepal like Gurung, Magar, Rai, Limbu, Tamang, Chettris, Brahmins,
         Newars, etc. Before the unification of modern Nepal, Gurung, Rai, and Magars had their independent countries, and still have their independent culture;
          manner of practicing religion, language, cuisine, music and dance, and their architectural settlement is distinctly different.</p>
        <p className="description">Newars, being the indigenous people of Kathmandu Valley, are rich in metal works, arts, crafts, and building palaces 
        and temples. Chettries (Khas) and Brahmins are Hindus by religions and historians state they are ancient settlers of Karnali region of Nepal. 
        They have carried their cultural values - with them - wherever they settled.</p>
      </div>
      <div>
        <img src='./images/caal.jpg' alt='image'/> 
        </div>
        <p className="description"> Tarai is the home of Tharu tribes, and of Madhesi people. They have distinctive cultures and lifestyle, though their 
        social life is influenced by Aryan culture and Hindu religion. Being a hot province of Nepal, people of Terai region wear light, cotton, clothes, 
        but, they work hard during the day . </p>
    </div>
  </div>
  <div className=' md: pt-20'>  <Footer/> </div>
  </div>
  )
}

export default Culture

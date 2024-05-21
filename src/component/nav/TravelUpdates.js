import React, { useState } from 'react'
import PlacesToGo from './PlacesToGo';
import ThingsToDo from './ThingsToDo';
import PlanYourTrip from './PlanYourTrip';
import Navbar from '../layout/Navbar';
import Footer from '../user/dashboard/Footer';
import { useNavigate } from 'react-router-dom';


const TravelUpdates = () => {
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
       <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} info={info} activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} handleItemClick={handleItemClick}  />
       <div className="head">
      <div className="body">
      <div className="details">
        <h1 className=" text-center">Latest Travel Updates</h1>
        
       <div>
        <p className=" text-center mt-3"> Updates about latest rules and standard protocol for traveling and trekking in Nepal.</p>
        </div>
        <div>
          <img src='./images/Press_Release-.jpg' alt=' error' className=' py-5'/>
        </div>
        <div className=' md: py-3'>  
        <h1 className=' font-bold bg-slate-400 w-1/2 text-xl'> FQs about the new provision</h1>
          
        </div>
      
        <div> 
          <h1 className=' font-bold'>What if I take permits before April 1st ? </h1>
          <p className=" md: py-3 text-justify mt-2">The new rule will come into effect from April 1st, 2023.
           The trekkers who get the permits and start the trek before April 1st will not require a guide. 
           But they'll need to have entered the trekking area before April 1st. </p>
        </div>
        <div> 
        <h1 className=' font-bold'>What if I want to do ACT or similar treks in mountain bikes? </h1>
          <p className=" md: py-3 text-justify mt-2">All the treks need to comply with the new rule. You can contact a trekking agency in Nepal for the guide to accompany you in mountain bikes.
           </p>
        </div>
        <div> 
        <h1 className=' font-bold'>What if I an experienced trekker and associated to a trekking/mountaineering association in home country? </h1>
          <p className=" md: py-3 text-justify mt-2"> The rule is applicable for all the foreign national trekkers.</p>
        </div>
        <div> 
        <h1 className=' font-bold'>What about the areas such as Chame, Muktinath etc that require TIMS card just because they lie inside a National Park or conservation area?
</h1>
          <p className=" md: py-3 text-justify mt-2"> Yes, all the areas need a guide and permits taken from an agency.</p>
        </div>
        <div> 
        <h1 className=' font-bold'> Is this rule also applicable when I hike around Kathmandu? Or to Sarangkot? Where all are these rules applicable?</h1>
          <p className=" md: py-3 text-justify mt-2">The Revised Provision for Trekking in Nepal must be followed only while trekking to areas where TIMS is applicable. It is applicable in all 
          national park areas in the mountains. It is not applicable in Kathmandu Valley outskirts, Pokhara outskirts, and hiking areas in and around major cities. </p>
        </div>
        <div> 
        <h1 className=' font-bold'>Do I have to go via a trekking agency? Or is it OK so long as I have a guide? </h1>
          <p className=" md: py-3 text-justify mt-2"> It is mandatory to hire a licensed trekking guide through a government-registered trekking agency
        </p>
        </div>
        <div> 
        <h1 className=' font-bold'>How can I find that out if the trekking agency is legit? </h1>
          <p className=" md: py-3 text-justify mt-2"> Trekking guide must be hired through government-registered trekking agency. You can verify information
           on the trekking agency from Department of Tourism and Trekking Agencies Association of Nepal. </p>
        </div>
        <div> 
        <h1 className=' font-bold'>What are the consequences if I do not follow this rule? </h1>
          <p className=" md: py-3 text-justify mt-2">What are the consequences if I do not follow this rule? </p>
        </div>
        <div> 
        <h1 className=' font-bold'> I am a trail runner and fast packer, no agency specifically provided guides that can keep up with me. What should I do?</h1>
          <p className=" md: py-3 text-justify mt-2"> It is applicable to all. You must ascertain that the trekking agency can provide guide who matches your specific requirement.</p>
        </div>
        <div> 
        <h1 className=' font-bold'>I am an expat living in Nepal. Does this rule also apply to me? </h1>
          <p className=" md: py-3  text-justify mt-2"> Yes, the rule is applicable to Diplomats as well as Expats.</p>
        </div>
        <div> 
        <h1 className=' font-bold'>I am Nepali. Does this rule apply to me? </h1>
          <p className=" md: py-3 text-justify mt-2"> The rule is not applicable to Nepali citizens.</p>
        </div>
        <div> 
        <h1 className=' font-bold'>What if I go on a motorcycle ride to Muktinath?</h1>
          <p className=" md: py-3 text-justify mt-2"> The rule does not apply to motorcycle ride or the bus ride to Muktinath. TIMS and Annapurna area permit are required.</p>
        </div>
      
      </div>
    </div>
  </div>
  <div className=' md: pt-20'>  <Footer/> </div>
 
    </div>
  )
}

export default TravelUpdates

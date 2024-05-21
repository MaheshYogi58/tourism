import React, { useState } from 'react'
import Navbar from '../../../../layout/Navbar';
import PlanYourTrip from '../../../../nav/PlanYourTrip';
import ThingsToDo from '../../../../nav/ThingsToDo';
import PlacesToGo from '../../../../nav/PlacesToGo';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer';

const Holi = () => {
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
      <img src='./images/ho.webp' className='Everest-img' />
      </div>
      <div className="head">
      <div className="body">
      <div className="details">
        <h1 className="title">What Makes the Holi festival in Nepal Special?</h1>
        <p className="description">Holi in Nepal is an energetic and lively Hindu festival that welcomes the arrival of spring. It's famously called the "Festival of Colors" because folks enjoy playing with bright color powders and colored-water balloons. 

In Nepal, the Holi festival is known as "Fagu Purnima" because it is celebrated on the full moon day of the Hindu month of Falgun (typically in February or March). The specific date changes each year as it follows the lunar calendar.

This year Holi is scheduled on the month of Chaitra 11, 2080 (March 24, 2024) in the Pahad region and on  Chaitra 12, 2080 (March 25, 2024) in the Terai Region.
<div><img src='./images/holi1.jpg' alt='image' className=' md: h-96 py-6 px-20'/></div>
<div><h1 className="title"> Importance of Holi festival in Nepalese Culture</h1>
<p className="description"> The Holi festival holds significant importance within Nepalese culture, marked by various cultural and social dimensions.
 Let's delve into some essential points that highlight the significance of Holi in Nepal:</p>
 <div>
  <h1 className="title">Spring Symbolism
</h1>
  <p className="description">Holi marks the arrival of spring in Nepal. The festival is celebrated at the end of winter and represents the victory of life over the cold and
     dark winter. The vibrant colors used during Holi represent the colorful and blossoming nature that comes with the arrival of spring.</p>
 </div>
 <div>
  <h1 className="title">Religious Roots</h1>
  <p className="description">Rooted in Hinduism, Holi celebrates the triumph of good over evil. The bonfires lit during Holika Dahan symbolize Prahlada's victory over Holika, 
  reinforcing the belief in righteousness prevailing.</p>
 </div>
 <div>
  <h1 className="title">Social Unity </h1>
  <p className="description">Holi transcends social boundaries, fostering unity and harmony. People of diverse ages and backgrounds unite during the festivities, overcoming societal barriers and cultivating a sense of togetherness. It's a time when individuals unwind, laugh,
   and share moments of pure enjoyment with family and friends.</p>
 </div>
 <div>
  <h1 className="title">Tourism and Festive Tourism</h1>
  <p className="description">The vibrant and unique way in which Holi is celebrated in Nepal attracts tourists from around the world.
   Festive tourism during Holi contributes to the economy and promotes cultural exchange.</p>
 </div>

</div>
 <div><img src='./images/colour.jpg' alt='image' /></div>
<div>
  <h1 className="title">Legend behind Holi festival in Nepal</h1>
  <p className="description">The story behind Holi in Nepal comes from Hindu mythology and centers around the triumph of good over evil. One popular legend is about Prahlada, a devoted follower of Lord Vishnu and the son of the demon king Hiranyakashipu. 
  Despite his father's attempts to diminish Prahlada's devotion, he remained steadfast.</p>
  <p className="description">Hiranyakaship sought the help of his sister Holika, believed to be immune to fire. Planning to eliminate Prahlada, Holika sat in a blazing fire with him on her lap. Unexpectedly, due to Prahlada's devotion and Lord Vishnu's protection, 
  Holika, supposed to be fire-resistant, burned to ashes while Prahlada remained unharmed.</p>
  <p className="description">This story symbolizes the victory of devotion and goodness over evil intentions. Holika Dahan, where bonfires are lit during Holi,
   commemorates this event, representing the symbolic burning of evil and the triumph of good. </p>
 </div>
 <div><img src='./images/god.jpg' alt='image' /></div>
 <div>
  <h1 className="title">How do people celebrate Holi in Nepal?</h1>
  <p className="description">People in Nepal celebrate Holi with immense enthusiasm and joy. The festival is characterized by lively and colorful festivities, traditional rituals, 
  and a sense of togetherness. Here are some key ways in which people observe Holi in Nepal:</p>
 </div>
 <div>
  <h1 className="title">1. Holika Dahan</h1>
  <p className="description">The celebrations kick off on the night before Holi with Holika Dahan, where bonfires are lit. People gather around these 
  bonfires to symbolically burn evil, marking the triumph of good over evil. This ritual is a representation of the story of Prahlada and Holika from 
  Hindu mythology.</p>
 </div>
 <div>
  <h1 className="title">2. Playing with Colors and Water</h1>
  <p className="description">On the main day of Holi, there's playful throwing of colored powders (gulal) and water balloons. People joyfully smear each other with vibrant colors, creating a lively and festive atmosphere. 
  Color powders, water guns (Pichkaris), and balloons are commonly used during these celebrations.</p>
 </div>
 <div>
  <h1 className="title"> 3. Music and Dance</h1>
  <p className="description"> Festive music and traditional dance contribute to the lively ambiance of Holi celebrations.
   People come together in public spaces, community centers, resorts, hotels, and homes to dance and revel in the music.</p>
 </div>
 <div>
  <h1 className="title">4. Traditional Foods</h1>
  <p className="description">People prepare Special Holi delicacies and indulge in festive foods. Popular treats include gujiya (sweet dumplings), 
  Bhang Lassi, Malai Peda, Bhang Laddoos, and all kinds of sweets that will enhance the festive atmosphere.</p>
 </div>
 <div>
  <h1 className="title">5. Colorful Attire</h1>
  <p className="description">People dress in bright and colorful attire, often choosing white to enhance the impact of the colored powders.  On the streets, roads, parks, 
  and wherever there is a Holi event, you will find people wearing white clothes colored with color powders.</p>
 </div>
 
  </p>
        
        
       
         

      </div>
    </div>
  </div>
  <div className=' md: pt-20'>  <Footer/> </div>
  </div>
  )
}

export default Holi

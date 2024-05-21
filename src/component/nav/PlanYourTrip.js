import React from 'react';
import { Link } from 'react-router-dom';



const PlanYourTrip = () => {
  
  const places = [
    {
      name: " TripIdeas" ,
     
      image: './images/trip.jpeg',
      path: '/tripideas',
      description: '',
      id: 1
    },
  
    {
      name: 'AboutNepal',
      image: './images/aboutnepal.jpeg',
      path: '/aboutnepal',
      description: '',
      id: 3
    },
    {
      name: 'TravelDetails',
      image: './images/traveldetail.jpeg',
      path: '/traveldetails',
      description: '',
      id: 4
    },
    {
      name: 'BookYourTicket',
      image: './images/bookyourticket.jpeg',
      path: '/bookyourticket',
      description: '',
      id: 5
    },
    
  ];

  return (
    <div>
    <div className=' md: flex col-span-2'>
     {places.map(place => (
       <Link to={place.path} key={place.id}>
         <img src={place.image} alt={place.name} style={{ width: '200px', height: '150px', margin: '10px' }} />
         {place.name}
       </Link>
     ))}
     </div>
   </div>
 );
};



export default PlanYourTrip;

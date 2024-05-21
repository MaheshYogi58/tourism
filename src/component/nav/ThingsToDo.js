import React from 'react'
import { Link } from 'react-router-dom';

const ThingsToDo = () =>  {

  const places = [
    {
      name: 'Advanture',
    
      image: './images/add.jpeg',
      path: '/advanture',
      description: '',
      id: 1
    },
  
    {
      name: 'Nature',
      image: './images/nature.jpg',
      path: '/nature',
      description: '',
      id: 3
    },
    {
      name: 'Culture',
      image: './images/cult.jpeg',
      path: '/culture',
      description: '',
      id: 4
    },
    {
      name: 'Wellness',
      image: './images/wellness.jpeg',
      path: '/wellness',
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
}


export default ThingsToDo

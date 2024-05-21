import React from 'react';
import { Link } from 'react-router-dom';

const PlacesToGo = () => {

  const places = [
    {
      name: 'Everest',
      image: './images/Everest_tk_trekker_(5)-1630474503.jpg',
      path: '/everest',
      description: '',
      id: 1
    },
  
    {
      name: 'Kathmandu',
      image: './images/kath.jpeg',
      path: '/kathmandu',
      description: '',
      id: 3
    },
    {
      name: 'Lumbini',
      image: './images/Lumbini.jpg',
      path: '/lumbini',
      description: '',
      id: 4
    },
    {
      name: 'Pokhara',
      image: './images/pokhara.jpg',
      path: '/pokhara',
      description: '',
      id: 5
    },
    {
      name: 'Chitwan',
      image: './images/chit.jpeg',
      path: '/chitwan',
      description: '',
      id: 6
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

export default PlacesToGo;

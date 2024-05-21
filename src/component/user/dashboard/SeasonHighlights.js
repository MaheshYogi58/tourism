import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Slider from 'react-slick';
import { useDispatch } from 'react-redux';

import { useAppContext } from '../../ContextAPI';
import { updateSelectedItemImage } from '../../redux/action/actions';

const SeasonHighlights = ({ title, data }) => {
  const navigate = useNavigate(); 
  const { appState, updateState } = useAppContext();
  const dispatch = useDispatch();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleItemClick = (item) => {
    dispatch(updateSelectedItemImage({ image: item.image, description: item.description }));
    navigate(item.path || '/details'); 
  };
  
  return (
    <div>
      <h1 className="season">{title}</h1>
      <div>
        <Slider {...settings}>
          {data?.map((item) => (
            <div key={item.id} id={`item-${item.id}`} className="item">
              <div className="justify-start" onClick={() => handleItemClick(item)}>
                <div className="imgevents">
                  <img alt="example" src={item.image} className="img-hover" />
                </div>
                <div>{item.name}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SeasonHighlights;

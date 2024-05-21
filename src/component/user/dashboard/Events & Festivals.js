import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react'
import Slider from 'react-slick'
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../ContextAPI";
import { useDispatch } from "react-redux";
import { updateSelectedItemImage } from "../../redux/action/actions";

const EventsFestivals = ({title,data}) => {
  const navigate = useNavigate(); 
  const { appState, updateState } = useAppContext();
  const dispatch = useDispatch();
  const handleItemClick = (item) => {
    dispatch(updateSelectedItemImage(item.image));
    navigate(item.path || '/eventsdetails');
  };
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
  return (
    <div>
    <h1 className='season'>{title}</h1>
<div >
  <Slider {...settings}>
 {
 data?.map((item)=>(
      <div key={item.id} id={`item-${item.id}`}className="item" >
   
    

     <div >
     <div className='  justify-start ' onClick={() => handleItemClick(item)}>
     <div className='imgevents'>
                      <img alt="example" src={item.image} className='img-hover' />
                    </div>
      
      
        <div>  {item.name}</div>
      
       
         
     </div>
     
   
  
  </div>
  
      </div>
     

  ))
}
</Slider>
</div>
  </div>
 

)
}

export default EventsFestivals

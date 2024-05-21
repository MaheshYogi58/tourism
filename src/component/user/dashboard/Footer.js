import { FacebookOutlined, InstagramOutlined, YoutubeFilled } from '@ant-design/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom';



const Footer = () => {
  const navigate=useNavigate();
  const handelabout =()=>{
    navigate("/about")
  }
  const handelcontact =()=>{
    navigate("/contactus")
  }

  return (
    <div className=' md:flex justify-around'>
      
        <div><img src='./images/nepal.jpeg' alt='error'/></div>
        <div className=' md: py-5'>
        <div>
        <div><p>Nepal Tourism Board is a national tourism organization <br/>
        of Nepal established in 1998 by an Act of Parliament in the form of <br/>
        partnership between the Government of Nepal and private sector <br/>
         tourism industry to develop and market Nepal as an attractive <br/>
         tourist destination. The Board provides platform for vision-drawn <br/>
         leadership for Nepal’s tourism sector by integrating Government <br/>
         commitment with the dynamism of private sector.
<br/>
<br/>
<br/>
© 2024. Nepal Tourism Board. All rights reserved.</p></div>
      </div>
      </div>
      <div>
       
        <div>
          <div>FIND US ON</div>
          <div className=' md: py-8'>
          <a href='https://www.facebook.com/nepaltourismboard?mibextid=ZbWKwL' target='_blank'>
            <div className=' md:flex gap-2'> 
           
              <div><FacebookOutlined /></div>
            <div>Facebook</div>
           
              </div>
              </a>
              <a href='https://www.instagram.com/nepaltourism?igsh=cjN6ejd0Mmt5bGZi'target='_blank'>
         <div className=' md:flex gap-2'>
          <div><InstagramOutlined/></div>
          <div>Instagram</div>

         </div>
         </a>
         <a href='https://youtube.com/@welcomenepal?feature=shared' target='_blank'>
       <div className=' md:flex gap-2'>
        <di><YoutubeFilled/></di>
        <div>Youtube</div>
        </div>
        </a>
       </div>
        </div>
        
      </div>
      <div >
      <div>NEPAL TOURISM BOARD</div>
      <div className=' md: py-8'>
      <div><h1 onClick={handelabout}>About</h1></div>
      <div><h1 onClick={handelcontact}>Contact Us</h1></div>
      </div>
      </div>
      <div>
      <div></div>
      <div></div>
      
      </div>
    </div>
  )
}

export default Footer

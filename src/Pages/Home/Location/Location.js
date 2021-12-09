import React from 'react';
import './Location.css'
import con1 from '../../../images/con1.png'
import con2 from '../../../images/con2.png'
import con3 from '../../../images/con3.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Location = () => {
    return (
        <div className="row container-fluid mb-5">
         <div className="col-md-6">
         <h2 className="get-heading">Get In Touch</h2>
         
             <div className='get-all container'>
                  <div className='gets'>
                      <div className='get'>
                           <img src={con1} alt=""/>
                         <div className='get-touch'>
                            <h4 >Meet Us</h4>
                            <p>Khidirpur kolkata 700023</p>
                         </div>
                      </div>
                      <div className='get'>
                           <img src={con2} alt=""/>
                           <div className='get-touch'>
                            <h4>Call Us</h4>
                            <p>+91-9017777777</p>
                         </div>
                      </div>
                      <div className='get'>
                            <img src={con3} alt=""/>
                            <div className='get-touch'>
                            <h4 >Email Us</h4>
                            <p>bizconnect@gmail.com</p>
                         </div>
                      </div>
                     <div className='social-icon'>
                        <h1 > <a className='socialfb' href="https://www.facebook.com/tushergoon123456789/" target="_blank"><FaFacebookSquare/></a> </h1>
                        <h1><a className='socialtw'  href="https://www.facebook.com/tushergoon123456789/" target="_blank"><FaTwitterSquare/></a></h1>
                       <h1> <a className='socialli'  href="https://www.linkedin.com/in/tusher-goon-299480216/"target="_blank"><FaLinkedin/></a></h1>
                       <h1> <a className='socialin bg-primary' href="https://www.instagram.com/tushergoondiponkar/"target="_blank"></a><FaInstagramSquare/></h1>
                     </div>
                  </div>
             </div>
             
          </div>



       {/* map section */}
        <div className="col-md-6">
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14553.575530449629!2d89.69999687706121!3d24.22799886746516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fde0afec9cba7d%3A0x31958b82823e70b!2sEnayetpur!5e0!3m2!1sbn!2sbd!4v1639016946013!5m2!1sbn!2sbd" allowfullscreen=""  loading="lazy"></iframe>
       </div>
      </div >
    );
};

export default Location;





import React from 'react';
import banner2 from '../../../images/banner2.png'

import AboutDetail from '../AboutDetail/AboutDetail';

const About = () => {
    return (
        <div id="about">
                        
                      
                        <img
                    className="d-block w-100"
                    src={banner2}
                    alt="First slide"
                />
           <AboutDetail></AboutDetail>
          
        </div>
       
    );
};

export default About;
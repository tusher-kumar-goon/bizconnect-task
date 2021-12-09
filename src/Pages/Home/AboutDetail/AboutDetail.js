import React from 'react';
import about1 from '../../../images/about1.png'
import './AboutDetail.css'

const AboutDetail = () => {
    return (
        <div className="row container-fluid mb-5 mt-5 ">
            <div className="col-md-6 about-text ">
                
                <p>BizConnect is glad to introduce its wn Virtual Photobooth - SnapSt ith the latest funky frames and stickers, we are all ready to make y photo sessions exciting and happening! ou can even customise your own ecorations according to your specifications. 
                  </p>
                  <p>
                    Be it for any occasion, the virtual photobooth is all here for you! Click photos and share them anywhere in your social media accounts. Anywhere and anytime, you have SnapStories with you! 
                    Happy Snapping! </p> 

            </div>

            <div className="col-md-6">
              <img className='w-100 img-fluid' src={about1} alt=""/>
            </div>
        </div>
    );
};

export default AboutDetail;
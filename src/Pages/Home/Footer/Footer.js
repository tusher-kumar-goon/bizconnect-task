import React from 'react';
import './Footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer-section me-3'>
           <div className="footer-text">
        <div>
           <div className='text-left'>
                <p>Terms & condition</p>
                <p>Privacy Policy</p>
          </div>

        </div>

        <div>
        <div className="social-footer icon-right">
                 <a className='socialfb' href="https://www.facebook.com/tushergoon123456789/" target="_blank"><FaFacebookSquare/></a>
                <a className='socialtw'  href="https://www.facebook.com/tushergoon123456789/" target="_blank"><FaTwitterSquare/></a>
               <a className='socialyt'  href="https://www.youtube.com/channel/UCi0zj63xgSdid74ctX41aSQ" target="_blank"><FaYoutubeSquare/></a>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Footer;
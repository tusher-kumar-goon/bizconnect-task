import React from 'react';
import './Banner.css'
import banner1 from '../../../images/banner1.png'
import banner2 from '../../../images/banner2.png'

const Banner = () => {
    return (
       <div>
            <div> 
            <img
        className="d-block w-100"
        src={banner1}
        alt="First slide"
       />
      </div>
      <div className='mt-5 text-zone container mb-5'>
           <p>Far too many website designers put contact pages near the bottom of their prioritiey list of copyrighting and design.it's no wonder that many contact pages look like they were built in the 1990s., While the rest website is beautifu and updated</p>
            <p>
                Thats my friends is a huge mistake.Your Contact us page is one of the most valuable pages on your website. And for most companies, it's typically one of the most -visited site pages </p>
          <p> In this article well show your over 40 real-life examples of contact pages you can use to inspire yours</p>
          
          <p>  But let's review elements effective contact  pages hsve in common to learn about the features and best practices you should remember to incude in you</p>
      </div>
       </div>
    );
};

export default Banner;
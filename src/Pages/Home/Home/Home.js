import React from 'react';

import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Location from '../Location/Location';

const Home = () => {
    return (
        <div id='home'>
           <Banner></Banner>
           <Blog></Blog>
           <Location></Location>
           <Contact></Contact>
                          
                  </div>
    );
};

export default Home;
import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import AppoinmentBannar from '../AppoinmentBannar/AppoinmentBannar';
import Banner from '../Banner/Banner';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppoinmentBannar></AppoinmentBannar>
        </div>
    );
};

export default Home;
import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../pages/Shared/Navber';
import Footer from '../pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;
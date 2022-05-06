import React from 'react';
import PageTitle from '../../Shared/PageTittle/PageTitle';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Inventory from '../Inventory/Inventory';
import LatesInfo from '../Latest/LatesInfo';
import Partners from '../Partners/Partners';
import Quotes from '../QuickQuote/Quotes';
import Services from '../service/Services';
import SoluationGuide from '../soluation_guide/SoluationGuide';
import Testimonials from '../Testmonials/Testimonials';

const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Inventory></Inventory>
            <Partners></Partners>
            <Services></Services>
            <SoluationGuide></SoluationGuide>
            <Quotes></Quotes>
            <LatesInfo></LatesInfo>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;
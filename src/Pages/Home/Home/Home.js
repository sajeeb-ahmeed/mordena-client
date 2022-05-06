import React from 'react';
import PageTitle from '../../Shared/PageTittle/PageTitle';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Inventory from '../Inventory/Inventory';
import LatesInfo from '../Latest/LatesInfo';
import Quotes from '../QuickQuote/Quotes';
import Services from '../service/Services';

const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Inventory></Inventory>
            <Services></Services>
            <Quotes></Quotes>
            <LatesInfo></LatesInfo>
        </>
    );
};

export default Home;
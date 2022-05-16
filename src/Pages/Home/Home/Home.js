import React from 'react';
import useServices from '../../../Hooks/UseServices';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTittle/PageTitle';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import LatesInfo from '../Latest/LatesInfo';
import Partners from '../Partners/Partners';
import Quotes from '../QuickQuote/Quotes';
import Services from '../service/Services';
import SoluationGuide from '../soluation_guide/SoluationGuide';
import Testimonials from '../Testmonials/Testimonials';

const Home = () => {
    const { services } = useServices();
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            {
                services.length === 0 ?
                    <Loading></Loading> :
                    <>
                        <Banner></Banner>
                        <Inventory></Inventory>
                        <Partners></Partners>
                        <Services></Services>
                        <Testimonials></Testimonials>
                        <SoluationGuide></SoluationGuide>
                        <Quotes></Quotes>
                        <LatesInfo></LatesInfo>
                    </>
            }

        </div>
    );
};

export default Home;
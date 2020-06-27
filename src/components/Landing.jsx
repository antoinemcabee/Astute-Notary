import React from 'react';
import MainShowcase from './pages/MainShowcase';
import SectionOne from './pages/SectionOne';
import SectionTwo from './pages/SectionTwo';
import SectionThree from './pages/SectionThree';
import Navbar from './Navbar';
import Footer from './Footer';
// import {SmoothScroll} from 'smooth-scroll';

import styled from 'styled-components'

const Landing = () => {

    const links = ['/#mainSection', '/#sectionOne', '/#sectionTwo', '/#sectionThree']

    return (
        <Wrapper>
            <Navbar
                links={ links }
                navTitles={ ['Home', 'About', 'Process', 'Contact'] }
            />
            <MainShowcase links={ links } />
            <SectionOne />
            <SectionTwo links={ links } />
            <SectionThree links={ links }/>
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
`;


export default Landing;
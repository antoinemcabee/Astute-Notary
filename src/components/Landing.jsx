import React, { useRef } from 'react';
import MainShowcase from './pages/MainShowcase';
import SectionOne from './pages/SectionOne';
import SectionTwo from './pages/SectionTwo';
import SectionThree from './pages/SectionThree';
import Navbar from './Navbar';
import Footer from './Footer';

import styled from 'styled-components'

const Landing = () => {
    const sectionHeader = useRef(null);
    const sectionOne = useRef(null);
    const sectionTwo = useRef(null);
    const sectionThree = useRef(null);
    
    const scrollToOne = () => window.scrollTo({ top: sectionOne.current.offsetTop, behavior: 'smooth' })
    const scrollToTwo = () => window.scrollTo({ top: sectionTwo.current.offsetTop, behavior: 'smooth' })
    const scrollToThree = () => window.scrollTo({ top: sectionThree.current.offsetTop, behavior: 'smooth' })
    const scrollToHeader = () => window.scrollTo({ top: sectionHeader.current.offsetTop, behavior: 'smooth' })

    return (
        <Wrapper>
            <Navbar
                scroll={ [scrollToHeader, scrollToOne, scrollToTwo, scrollToThree] }
                links={ ['/#mainSection', '/#sectionOne', '/#sectionTwo', '/#sectionThree'] }
                navTitles={ ['Home', 'About', 'Process', 'Contact'] }
            />
            <MainShowcase section={ sectionHeader } scroll={ scrollToOne } />
            <SectionOne section={ sectionOne } />
            <SectionTwo section={ sectionTwo } scroll={ scrollToThree } />
            <SectionThree section={ sectionThree } scroll={ scrollToHeader }/>
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
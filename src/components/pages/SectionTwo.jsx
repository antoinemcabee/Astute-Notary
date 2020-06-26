import React from 'react';
import styled from 'styled-components';
import ImgOne from '../../assets/img3.jpg';
import Card from '../Cards';
import { ButtonPrimary } from '../Buttons';

const SectionTwo = (props) => {
    return (
        <BG id='section-b' ref={ props.section }>
            <BgImage />

            <Wrapper>
                <Title> <span className="secondary">Our</span> Process</Title>
                <CardWrapper>
                    <Card 
                        title='Step 1'
                        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    />
                    <Card 
                        title='Step 2'
                        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    />
                </CardWrapper>
            </Wrapper>

            <ButtonPrimary link={ props.scroll } title='Learn More' />
        </BG>
        
    );
}

const BG = styled.section`
    height: 110%;
    width: 100%;
    position: relative;
`;

const BgImage = styled.div`
    position: absolute;
    background: #849974 url(${ImgOne});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    z-index:-2;
    opacity: 1;
`;

const Wrapper = styled.div`
    padding: 0 1.5rem;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardWrapper = styled.section`
    display: flex;
    overflow-x: auto;
    max-width: 98%;
`;

const Title = styled.h1`
    padding-top: 3rem;
    font-weight: 800;
    font-size: 2rem;
    z-index:1
    color: #36384c;
    margin-bottom: 2rem;

    .secondary {
        color: #849974;
        font-weight: 100;
    }
`;

export default SectionTwo;

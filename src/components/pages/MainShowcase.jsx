import React from 'react';
import styled from 'styled-components';
import ImgOne from '../../assets/img1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';

const MainShowcase = (props) => {

    return (
        <Showcase id='mainSection'>
            <BgImage />

            <HashLink to={props.links[1]}>
                <FontAwesomeIcon className='icon' icon={ faChevronDown }/>
            </HashLink>
            
            <Wrapper>
                <Title>Astute Notary Sevices</Title>
                <StyledH2>Texas Notary</StyledH2>
            </Wrapper>
        </Showcase>
    )
}

const Showcase = styled.section`
    height: 100vh;
    width: 100%;
    position: relative;

    .icon {
        color: #fff;
        font-size: 3.5rem;
        width: 100%;
        cursor: pointer;
        height: 5%;
        position: absolute;
        right: 0rem;
        bottom: 10%;
        // z-index: 1; 
    }
`

const Wrapper = styled.div`
    padding: 0 1.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const BgImage = styled.div`
    position: absolute;
    background: #599398 url(${ImgOne});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    z-index:-1;
    opacity: 0.15;
`

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
    padding-bottom: 2rem;
    // border-bottom: 1px solid #fff;
    z-index: -1;
`

const StyledH2 = styled.h2`
    padding-top: 2rem;
    font-weight: 100;
    color: #fff;
    z-index: -1;

`

export default MainShowcase;
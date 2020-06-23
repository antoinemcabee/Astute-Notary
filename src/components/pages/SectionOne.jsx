import React from 'react';
import styled from 'styled-components';
import ImageOne from '../../assets/img2.jpg'

const SectionOne = (props) => {
    return(
        // Section 2
        <BG id='section-a' ref={props.section}>
            <Wrapper>
                <Title>About <span className='secondary'>Astute</span></Title>
                <StyledImage />
                <StyledParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos explicabo, qui minima molestiae quidem ab eaque non quis iure amet ipsam. Quis odit amet tempora alias eius consequuntur et?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos explicabo, qui minima molestiae quidem ab eaque non quis iure amet ipsam. Quis odit amet tempora alias eius consequuntur et?</StyledParagraph>  
            </Wrapper>
            
        </BG>
    )
}

const BG = styled.section`
    background: #fff;
`;

const Wrapper = styled.div`
    padding: 0 1.5rem;
    padding-bottom: 40px;
`;

const StyledImage = styled.img.attrs({
    src: ImageOne
})`
    padding-top: 2rem;
    url: {src}
`;

const Title = styled.h1`
    padding-top: 3rem;
    font-weight: 800;
    font-size: 2rem;
    color: #36384c;

    .secondary {
        color: #849974;
        font-weight: 100;
    }
`;

const StyledParagraph = styled.p`
    border-left: 7px solid #849974;
    margin-top: 2.5rem;
    line-height: 2;
    text-align: left;
    padding-left: 15px;
`;


export default SectionOne;
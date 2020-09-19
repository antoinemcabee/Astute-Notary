import React from 'react';
import styled from 'styled-components';
import ImageOne from '../../assets/img2.jpg'

const SectionOne = (props) => {
    return(
        // Section 2
        <BG id='sectionOne'>
            <Wrapper>
                <Title>About <span className='secondary'>Astute</span></Title>

                <ContentWrapper>
                    <StyledImage />
                    <div className='content-divider'></div>
                    <StyledParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos explicabo, qui minima molestiae quidem ab eaque non quis iure amet ipsam. Quis odit amet tempora alias eius consequuntur et?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos explicabo, qui minima molestiae quidem ab eaque non quis iure amet ipsam. Quis odit amet tempora alias eius consequuntur et?</StyledParagraph>  
                </ContentWrapper>
                
            </Wrapper>
            
        </BG>
    )
}

const desktop = `(min-width: 768px)`;

const BG = styled.section`
    background: #fff;

    @media ${desktop} {

        .content-divider {
            border-left: 1.25px solid #000;
            margin: 9rem 5rem;
        }
    }
`;

const Wrapper = styled.div`
    padding: 0 1.5rem;
    padding-bottom: 5.5rem;

    @media ${desktop} {
        padding: 0 4rem;
    }
`;

const ContentWrapper = styled.div`
    @media ${desktop} {
        width: 100%;
        height: 100%;
        display: flex;
        padding-bottom: 5rem;
        justify-content: center;
    }
`;

const StyledImage = styled.img.attrs({
    src: ImageOne
})`
    margin-top: 2rem;
    url: {src}

    @media ${desktop}{
        object-fit: cover;
        width: 35%;
        height: 350px;
        align-self: center;
    }
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

    @media ${desktop} {
        margin-bottom: 2.5rem;
    }
`;

const StyledParagraph = styled.p`
    border-left: 7px solid #849974;
    margin-top: 2.5rem;
    line-height: 2;
    text-align: left;
    padding-left: 15px;

    @media ${desktop} {
        border-left: 0;
        border-bottom: 40px solid #849974;
        margin-bottom: 0;
        padding-bottom: 40px; 
        align-self: center;
        height: 35%;
    }
`;


export default SectionOne;
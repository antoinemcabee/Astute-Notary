import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelopeOpen, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link';

const SectionThree = (props) => {
    return (
        <Section id='sectionThree'>
            <Wrapper>
                <Title>Contact <span className='secondary'>Us</span></Title>
                <ContentWrapper>
                    <div className='phone-content'>
                        <div className="phone">
                            <FontAwesomeIcon  className='icon' icon={faPhoneAlt} />
                            <SubTitle>Phone</SubTitle>
                        </div>
                        <StyledContact>(123) 456 - 7890</StyledContact>
                    </div>

                    <div className='email-content'>
                        <div className="email">
                            <FontAwesomeIcon  className='icon' icon={faEnvelopeOpen} />
                            <SubTitle>Email</SubTitle>
                        </div>
                        <StyledContact>jp@astutenotaryservices.com</StyledContact>
                    </div>
                </ContentWrapper>

                <HashLink to={ props.links[0] }>
                    <FontAwesomeIcon className='icon-arrow' icon={ faChevronUp }/>
                </HashLink>
                
            </Wrapper>
        </Section>
    );
}

const Section = styled.section`
    background: #e9dccd;
    width: 100%;
    height: 70vh;
    position: relative;
    display: flex;
    flex-direction: column;

    .icon{
        color: #36384c;
        font-size: 1rem;
    }

    .icon-arrow {
        color: #36384c;
        font-size: 3.5rem;
        width: 100%;
        cursor: pointer;
        height: 5%;
        position: absolute;
        right: 0rem;
        bottom: 10%;
    }

    .phone{
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #36384c;
    }

    .phone-content {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
    }

    .email{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #36384c;
    }

    .email-content {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
    }
`;

const Wrapper = styled.div`
    padding: 0 1.5rem;
    width: 100%;
`;

const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h1`
    padding-top: 3rem;
    font-weight: 800;
    font-size: 2rem;
    color: #36384c;
    margin-bottom: 2rem;

    .secondary {
        color: #849974;
        font-weight: 100;
    }
`;

const SubTitle = styled.h2`
    color: #36384c;
    font-weight: 600;
    font-size: .75rem;
    padding-left: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 5px;
`;

const StyledContact = styled.h3`
    padding-top: 1.5rem;
    font-weight: 400;
    color: #613a43;
    font-size: .85rem;
    min-width: 95%;
    letter-spacing: 5px;
`;

export default SectionThree;

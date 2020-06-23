import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelopeOpen, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const SectionThree = (props) => {
    return (
        <Section id='sectionThree' ref={ props.section }>
            <Wrapper>
                <Title>Contact <span className='secondary'>Us</span></Title>
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

                <FontAwesomeIcon onClick={props.scroll} className='icon-arrow' icon={ faChevronUp }/>
            </Wrapper>
        </Section>
    );
}

const Section = styled.section`
    background: #e9dccd;
    width: 100%;
    height: 100vh;
    position: relative;

    .icon{
        color: #36384c;
        font-size: 1.5rem;
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
    }

    .phone-content {
        width: 90%;
        position: absolute;
        top: 35%;
    }

    .email{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .email-content {
        width: 90%;
        position: absolute;
        top: 55%;
    }
`;

const Wrapper = styled.div`
    padding: 0 1.5rem;
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
    font-weight: 200;
    font-size: 1.75rem;
    padding-left: 1.25rem;
`;

const StyledContact = styled.h3`
    font-weight: 400;
    color: #613a43;
    font-size: 1.5rem;
    min-width: 95%;
`;

export default SectionThree;

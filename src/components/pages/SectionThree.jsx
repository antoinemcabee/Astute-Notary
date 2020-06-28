import React from 'react';
import styled from 'styled-components';
import { faPhoneAlt, faEnvelopeOpen, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HashLink } from 'react-router-hash-link'
import { CardSecondary } from '../Cards'

const SectionThree = (props) => {
    return (
        <Section id='sectionThree'>
            <Wrapper>
                <Title>Contact <span className='secondary'>Us</span></Title>
                <ContentWrapper>
                    <CardSecondary
                        title='Phone'
                        titleColor='#36384c'
                        content='(123) 459-7890'
                        icon={faPhoneAlt}
                        contentColor= '#613a43'
                    />

                    <CardSecondary
                        title='Email'
                        titleColor='#36384c'
                        content='antoine@antoine.com'
                        icon={faEnvelopeOpen}
                        contentColor= '#613a43'

                    />
                </ContentWrapper>

                <HashLink to={props.links[0]}>
                    <FontAwesomeIcon className='arrowIcon' icon={faChevronUp}/>
                </HashLink>
                
            </Wrapper>
        </Section>
    );
}

const desktop = `(min-width: 768px)`;

const Section = styled.section`
    background: #e9dccd;
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;

    .arrowIcon {
        color: #36384c;
        font-size: 2.5rem;
        width: 100%;
        cursor: pointer;
        margin: 3.5rem 0;
    }

`;

const Wrapper = styled.div`
    padding: 0 1.5rem;
    width: 100%;

`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${desktop} {
        flex-direction: row;
        align-items: center;
    }
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

export default SectionThree;

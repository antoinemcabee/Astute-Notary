import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CardPrimary = (props) => {
    return (
        <CardBase
            background={ props.background ? true : false}
            bgColor={ props.bgColor }
            opacity={ props.opacity }
            >
            <CardWrapper>
                <CardTitle titleColor={ props.titleColor }>{ props.title }</CardTitle>
                <SeparationBar />
                <CardContent>{ props.content }</CardContent>
            </CardWrapper>
        </CardBase>
    );
}

export const CardSecondary = (props) => {
    return (
        <CardBaseSecondary
            background={ props.background ? true : false}
            bgColor={ props.bgColor }
            opacity={ props.opacity }
            >
            <CardWrapperSecondary>
                <TitleWrapper titleColor={ props.titleColor }>
                    <FontAwesomeIcon className='icon' icon={ props.icon }/>
                    <CardTitleWithIcon titleColor={ props.titleColor }>{ props.title }</CardTitleWithIcon>
                </TitleWrapper>
                
                <SeparationBar color={ props.titleColor } />

                <CardContentSecondary contentColor={ props.contentColor }>{ props.content }</CardContentSecondary>
            </CardWrapperSecondary>
        </CardBaseSecondary>
    );
}

const desktop = `(min-width: 768px)`;

const CardBase = styled.div`
    min-width: 85%;
    background-color: ${props => props.background ? props.bgColor : 'transparent'};
    opacity: ${props => props.opacity ? props.opacity : 1};
    padding: 2rem 1rem;
    // margin-top: 2rem;
    margin-right: 2rem;

    @media ${desktop} {
        max-width: 40%;
        min-width: 0;
        margin-bottom: 1.5rem;
    }
`;

const CardBaseSecondary = styled(CardBase)`
    margin-right: 0;
`;

const CardWrapper = styled.div`
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const CardWrapperSecondary = styled(CardWrapper)`
    align-items: center;
`;


const TitleWrapper = styled.div`
    display: flex;

    .icon {
        color: ${props => props.titleColor};
        font-size: 1rem;
    }
`;

const CardTitle = styled.h2`
    color: ${props => props.titleColor};
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 5px;
`;

const CardTitleWithIcon = styled(CardTitle)`
    padding: 0 1rem;
`

const CardContent = styled.p`
    color: #fff;
    line-height: 2;
    text-align: left;
    font-size: .95rem;
`;

const CardContentSecondary = styled(CardContent)`
    letter-spacing: 3px;
    text-align: center;
    color: ${props => props.contentColor}
`;

const SeparationBar = styled.div`
    border-bottom: 18px solid ${props => props.color};
    width: 5rem;
    margin: 1.5rem 0;
`;

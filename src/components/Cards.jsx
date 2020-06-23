import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
    return (
        <CardBase>
            <CardWrapper>
                <CardTitle>{ props.title }</CardTitle>
                <CardContent>{ props.content }</CardContent>
            </CardWrapper>
        </CardBase>
    );
}

const CardBase = styled.div`
    min-width: 85%;
    background-color: #333;
    opacity: .7;
    padding: 2rem 1rem;
    margin-top: 2rem;
    margin-right: 2rem;
`;

const CardWrapper = styled.div`
    padding: 0 1rem;
`;

const CardTitle = styled.h2`
    color: #e9dccd;
    font-weight: 200;
    font-size: 1.5rem;
`;

const CardContent = styled.p`
    color: #fff;
    line-height: 2;
`;

export default Card;

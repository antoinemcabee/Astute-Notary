import React from 'react';
import styled from 'styled-components';

export const ButtonPrimary = (props) => {
    return (
        <Primary onClick={ props.link } >{ props.title }</Primary>
        //add a href to get the anchor tag to work
    );
}

export const ButtonSecondary = (props) => {
    return (
        <Secondary onClick={ props.link } >{ props.title }</Secondary>
    );
}


const Primary = styled.div`
    background: #36384c;
    color: #fff;
    display: inline-block;
    text-decoration: none;
    padding: 1em 2.5em;
    margin: 1.5rem 0;
    max-width: 70%;

    :hover{
        color: #36384c;
        background: transparent;
        border: 1px solid #36384c;
        cursor: pointer;
    }
}
`;

const Secondary = styled.div`
    background: #613a43;
    color: #fff;
    disaply: inline-block;
    text-decoration: none;
    padding: 1em 2.5em;
    margin: 1.5rem 0;

    :hover{
        color: #614a43;
        background: transparent;
        border: 1px solid #613a43;
    }
`;

export default { ButtonPrimary, ButtonSecondary };

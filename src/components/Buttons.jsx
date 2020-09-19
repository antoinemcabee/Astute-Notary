import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const ButtonPrimary = (props) => {
    return (
        <HashLink to={ props.link }>
            <Primary mb={props.marginBttm} mt={props.marginTop} >{ props.title }</Primary>
        </HashLink>
    );
}

export const ButtonSecondary = (props) => {
    return (
        <HashLink to={props.link}>
            <Secondary mb={props.marginBttm} mt={props.marginTop} >{ props.title }</Secondary>
        </HashLink>
    );
}


const Primary = styled.div.attrs( props => ({
    href: props.link
}))`
    background: #36384c;
    color: #fff;
    display: inline-block;
    text-decoration: none;
    padding: 1em 2.5em;
    margin: 1.5rem 0;
    margin-top: ${props => props.mt}rem;
    margin-bottom: ${props => props.mb}rem;
    max-width: 70%;

    :hover{
        color: #36384c;
        background: transparent;
        border: 1px solid #36384c;
        cursor: pointer;
    }
}
`;

const Secondary = styled(Primary)`
    background: #613a43;

    :hover{
        color: #614a43;
        border: 1px solid #613a43;
    }
`;

export default { ButtonPrimary, ButtonSecondary };

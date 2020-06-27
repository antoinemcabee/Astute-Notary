import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const Navbar = (props) => {

    const [active, setActive] = useState(false);

    const handleClick = (index) => {
        return props.scroll[index];
    }
    
    const renderNavItems = () => {
        return ( 
            props.scroll.map((navItem, index) => 
                <NavListItem key={index} >
                    <HashLink smooth to={props.links[index]}> 
                        <h4 className='navTitles'>{ props.navTitles[index] }</h4>
                    </HashLink>
                </NavListItem>
            
            )
        )
    }

    return (
        <Nav>
            <NavLogo onClick={props.scroll[0]}>
                <h4>The Nav</h4>
            </NavLogo>
            <NavList activate={active}>
                { renderNavItems() }
            </NavList>
            <Burger onClick={() => setActive(!active)}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </Burger >
        </Nav>
    );
}

const mobile =  `(max-width: 768px)`;

const fadeIn = keyframes`
    from {
        opacity: 0;
        trasform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

const Burger = styled.div`
    display: none;

    div {
        width: 25px;
        height: 2px;
        background-color: #fff;
        margin: 5px;
    }

    @media ${mobile} {
        display: block;
        cursor: pointer
    }

`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    background-color: #849974;
    opacity: 1;
    z-index: 1001;

    .navTitles {
        font-weight: 600;
        letter-spacing: 3px;
        text-transform: uppercase;
        font-size: .75rem;
    }
`;

const NavLogo = styled.div`

    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 20px;
    cursor: pointer;
`;

const NavList = styled.ul`

    display:flex;
    width: 40%;
    justify-content: space-around;

    @media ${mobile} {
        display: none;
        position: absolute;
        right: 0px;
        height: 100vh;
        top: 8vh;
        background-color: #849974;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        justify-content: space-evenly;
        transform: ${props => props.activate ? 'translateX(0%)' : 'translateX(100%)'};
        transition: transform 0.25s ease-in-out;
        z-index:1000;

        // li {
        //     opacity: 0;
        // }



        
    }
    
`;

const NavListItem = styled.li`
    list-style: none;
    cursor: pointer;
    z-index: 1005;

    a:hover {
        color: #613a43;
    }

    a {
        text-decoration: none;
        list-style: none;
        color: #fff;
        transition: all .2s ease-in-out;
    }


`;




export default Navbar;

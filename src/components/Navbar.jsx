import React, { useState } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const Navbar = (props) => {

    const [active, setActive] = useState(false);
    
    const renderNavItems = () => {
        return ( 
            props.links.map((navItem, index) => 
                <NavListItem key={index} onClick={ () => setActive(!active) }>
                    <HashLink to={props.links[index]}> 
                        <h4 className='navTitles'>{ props.navTitles[index] }</h4>
                    </HashLink>
                </NavListItem>
            )
        )
    }

    return (
        <Nav>
            <HashLink to={ props.links[0] }>
                <NavLogo >
                    <h4>ANS</h4>
                </NavLogo>
            </HashLink>
            
            <NavList activate={active}>
                <SideBarWrapper>
                    { renderNavItems() }
                </SideBarWrapper>
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
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    min-height: 8vh;
    background-color: #849974;
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

const SideBarWrapper = styled.div`
    display:flex;
    justify-content: space-around;
    width: 100%;

    @media ${mobile} {
        height: 80%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
`;

const NavList = styled.ul`

    width: 40%;

    @media ${mobile} {
        display: none;
        position: absolute;
        right: 0px;
        height: 100vh;
        top: 8vh;
        background-color: #849974;
        display: flex;
        flex-direction: column;
        justify-content: start;
        width: 50%;
        transform: ${props => props.activate ? 'translateX(0%)' : 'translateX(100%)'};
        transition: transform 0.25s ease-in-out;
        z-index:1000;
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
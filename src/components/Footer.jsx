import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Wrapper>
            <p className="copyright">&copy; 2020 Astute Notary Services, LLC</p>
            <p className="credits">Website and Media Powered By <span ><a className='link' href="http://antoinemcabee.dev" rel="noopener noreferrer" target="_blank">Antoine McAbee/</a></span></p>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    background: #36384c;
    width: 100%;
    min-height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        color: #a4a4a4;
        font-size: 12px;
    }

    .link {
        color: #e9dccd;
        cursor: pointer;
    }
`;



export default Footer;

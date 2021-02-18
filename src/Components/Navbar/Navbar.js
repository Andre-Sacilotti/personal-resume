import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import Navitem from './Navitem';

const NavbarDivUpper = styled.div`
    max-width: 100vw;
`;

const NavbarDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 15px;
    padding-right: 40px;
    
    @media(max-width: 585px){
    display: none;
} 
`;

const MobileNavbarDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-right: 40px;
    min-width: 70vw;
    
    @media(min-width: 586px){
    display: none;
} 
`;

const MenuIconDiv = styled.div`
  padding-top: 10px;
  padding-left: 12px;
`;

const Navbar = () => {
  const [showNavbar, setNavbar] = useState(false);

  const handlerNavbar = () => {
    setNavbar(!showNavbar);
  };

  return (
    <NavbarDivUpper>

        <MobileNavbarDiv>
          <MenuIconDiv>
            <IconContext.Provider value={{ size: 32, color: '#FFFFFF' }}>
              <FiMenu onClick={handlerNavbar}/>
            </IconContext.Provider>
          </MenuIconDiv>
        </MobileNavbarDiv>

        <NavbarDiv>
            <Navitem active={true}>Home</Navitem>
            <Navitem>About</Navitem>
            <Navitem>Portfólio</Navitem>
            <Navitem>Experience</Navitem>
            <Navitem>Blog</Navitem>
            <Navitem>Contact</Navitem>
        </NavbarDiv>
    </NavbarDivUpper>
  );
};

export default Navbar;

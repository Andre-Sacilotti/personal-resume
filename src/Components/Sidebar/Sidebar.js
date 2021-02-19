import React from 'react';
import styled from 'styled-components';

const SidebarDiv = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  
  position: absolute;
  top: 0;
  left: 0;
  background-color: #232323;
  width: 70vw;
  height: 100vh;
`;

const Sidebar = (props) => (
  <SidebarDiv show={props.show}>
    Teste
  </SidebarDiv>
);

export default Sidebar;

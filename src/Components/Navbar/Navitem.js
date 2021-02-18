import React from 'react';
import styled from 'styled-components';

const NavitemDiv = styled.div`
  color: ${(props) => (props.active === true ? '#FFFFFF' : '#FFFFFF71')};
  padding: 10px 10px;
  font-weight: 300;
  font-size: 18px;
  max-width: 150px
`;

const TextDecoration = styled.div`
  margin-top: 5px;
  max-height: 2px;
  min-height: 2px;
  background-color: ${(props) => (props.active === true ? '#FFFFFF' : '#FFFFFF56')};
`;

const Navitem = (props) => (
  <NavitemDiv active={props.active}>
    {props.children}
    <TextDecoration active={props.active} />
  </NavitemDiv>
);

export default Navitem;

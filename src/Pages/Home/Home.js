import React from 'react';
import styled from 'styled-components';
import Navbar from '../../Components/Navbar/Navbar';

const HomeDiv = styled.div`
  background-color: #191919;
  min-height: 100vh;
  width: 100vw;
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
`;

const Home = () => (
    <HomeDiv>
      <Navbar />
      Teste
    </HomeDiv>
);

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';


const ButtonsHome = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const HomePage = () => {
  const VerViagens = useNavigate()
  const AreaAdmin = useNavigate()

  const goToViagens = () => {
    VerViagens("/trips/list")
  }

  const goToLogin = () => {
    AreaAdmin("/login")
  }
  return (
    <div>
        <h2>LabeX</h2>
        <ButtonsHome onClick={goToViagens}>Ver viagens</ButtonsHome>
        <ButtonsHome onClick={goToLogin}>Área Admin</ButtonsHome>
    </div>
  );
}

export default HomePage;

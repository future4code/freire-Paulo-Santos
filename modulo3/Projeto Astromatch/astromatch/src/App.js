import React, { useState } from 'react';
import styled from 'styled-components';
import CardUser from './components/CardUser';


const AppContainer = styled.div`
  border: 1px solid black;
  height: 90vh;
  width: 90%;
  max-width: 400px;
  box-sizing: border-box;
  margin: auto;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`

const ClearButton = styled.button`
  position: absolute;
  bottom: 0px;
  right: 0px;
`

const ButtonsContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-around;
`

const LikeButton = styled.button`
  width: 100px;

`

const HeaderContainer = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const HeaderTitle = styled.div`

`
const Matchs = styled.button`
  display: flex;
`

const App = () => {

  const [page, setPage] = useState("home")

  const changePage = () => {
    page === "home" ? setPage("details"):setPage("home")
  }

  return (
    <div>
      <AppContainer>
        <HeaderContainer>
          <HeaderTitle>Astro Match</HeaderTitle>
          <Matchs>matchs</Matchs>
        </HeaderContainer>
        <CardUser />
        <ButtonsContainer>
          <LikeButton>X</LikeButton>        
          <LikeButton>S2</LikeButton>        
        </ButtonsContainer>
      </AppContainer>
      <ClearButton>Limpar</ClearButton>
    </div>
  );
}

export default App;

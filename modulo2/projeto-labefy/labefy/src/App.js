import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import PlaylistCreationPage from './components/PlaylistCreationPage';
import PlaylistManagerPage from './components/PlaylistManagerPage';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: lightgreen;
`
class App extends React.Component {
  state = {
    currentPage: "playlistCreationPage"
  }

  changePage = (currentePage) => {
    this.setState({ currentPage: currentePage })
  }
  render() {
    const renderCurrentPage = () => {
      if (this.state.currentPage === "playlistCreationPage") {
        return <PlaylistCreationPage />
      }
      else if (this.state.currentPage === "playlistManagerPage") {
        return <PlaylistManagerPage />
      }
    }

    return (
      <AppContainer>
        <Header
          changePage={this.changePage}
        />
        {renderCurrentPage()}
      </AppContainer>
    );
  }
}

export default App;

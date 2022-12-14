import React from 'react'
import styled from 'styled-components';
import PlaylistDetail from '../PlaylistDetail';
import Playlists from '../Playlists'

const PlaylistManagerContainer = styled.div`
`

// const SearchContainer = styled.div`
//     width: 90vw;
//     display: flex;
//     justify-content: space-between;
// `

class PlaylistManagerPage extends React.Component {
    state = {
        currentPage: 'playlists',
        playlistId: ""
    }

    changePage = (currentePage, playlistId) => {
        this.setState({
            currentPage: currentePage,
            playlistId: playlistId
        })
    }

    render() {
        const renderCurrentPage = () => {
            if (this.state.currentPage === "playlists") {
                return <Playlists
                    changePage={this.changePage}
                />
            }
            else if (this.state.currentPage === "playlistDetail") {
                return <PlaylistDetail
                    changePage={this.changePage}
                    playlistId={this.state.playlistId}
                />
            }
        }

        return (
            <PlaylistManagerContainer>
                {/* <SearchContainer>
                    <input placeholder="Buscar Playlists" />
                    <button>Buscar</button>
                    <button>Limpar busca</button>
                </SearchContainer> */}
                {renderCurrentPage()}
            </PlaylistManagerContainer>
        )
    }
}

export default PlaylistManagerPage;
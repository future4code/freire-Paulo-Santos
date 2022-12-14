import React from 'react'
import styled from 'styled-components';
import PlaylistCard from '../PlaylistCard';
import axios from 'axios';
import { axiosConfig, BASE_URL } from '../../constants';

const PlaylistsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
`

class Playlists extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount = () => {
        this.fetchPlaylists()
    }

    fetchPlaylists = () => {
        axios.get(BASE_URL, axiosConfig)
            .then(response => {
                this.setState({ playlists: response.data.result.list })
            })
            .catch(err => {
                console.log(err)
            })
    }

    deletePlaylist = (playlistId) => {
        axios.delete(`${BASE_URL}/${playlistId}`, axiosConfig)
            .then(() => {
                this.fetchPlaylists()
                alert("Playlist deletada!")
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const playlists = this.state.playlists.map(playlist => {
            return <PlaylistCard
                key={playlist.id}
                changePage={this.props.changePage}
                name={playlist.name}
                playlistId={playlist.id}
                deletePlaylist={this.deletePlaylist}
            />
        })
        return (
            <PlaylistsContainer>
                {playlists}
            </PlaylistsContainer>
        )
    }
}

export default Playlists;
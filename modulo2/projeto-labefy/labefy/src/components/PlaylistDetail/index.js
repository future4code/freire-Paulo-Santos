import React from 'react'
import styled from 'styled-components'
import TrackCard from '../TrackCard/TrackCard'
import axios from 'axios'
import { BASE_URL, axiosConfig } from '../../constants'

const PlaylistsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
`

const TrackCreationForm = styled.form`
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
        display: flex;
        flex-direction: column;
    }
`

class PlaylistDetail extends React.Component {
    state = {
        tracks: [],
        trackName: "",
        artist: "",
        url: ""
    }

    componentDidMount = () => {
        this.fetchTracks()
    }

    fetchTracks = () => {
        axios
            .get(`${BASE_URL}/${this.props.playlistId}/tracks`, axiosConfig)
            .then(response => {
                this.setState({ tracks: response.data.result.tracks })
            }).catch(err => {
                console.log(err)
            })
    }

    removeTrackFromPlaylist = (trackId) => {
        axios
            .delete(`${BASE_URL}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig)
            .then(response => {
                console.log(response)
                this.fetchTracks()
            })
            .catch(err => {
                console.log(err)
            })
    }

    changeInputValue = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addTrackToPlaylist = (e) => {
        e.preventDefault()

        const body = {
            name: this.state.trackName,
            artist: this.state.artist,
            url: this.state.url
        }

        axios
            .post(`${BASE_URL}/${this.props.playlistId}/tracks`, body, axiosConfig)
            .then(() => {
                this.fetchTracks()
                this.setState({ trackName: "", artist: "", url: "" })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const tracks = this.state.tracks.map(track => {
            return <TrackCard
                key={track.id}
                trackName={track.name}
                artist={track.artist}
                url={track.url}
                trackId={track.id}
                removeTrackFromPlaylist={this.removeTrackFromPlaylist}
            />
        })
        return (
            <PlaylistsContainer>

                <TrackCreationForm onSubmit={this.addTrackToPlaylist}>
                    <div>
                        <label>Nome da Música:</label>
                        <input
                            placeholder="Nome da música"
                            name="trackName"
                            value={this.state.trackName}
                            onChange={this.changeInputValue}
                        />
                    </div>
                    <div>
                        <label>Artísta:</label>
                        <input
                            placeholder="Nome do Artísta"
                            name="artist"
                            value={this.state.artist}
                            onChange={this.changeInputValue}
                        />
                    </div>
                    <div>
                        <label>URL da música:</label>
                        <input
                            placeholder="Url música"
                            name="url"
                            value={this.state.url}
                            onChange={this.changeInputValue}
                        />
                    </div>
                    <button type='submit'>Adicionar música</button>
                </TrackCreationForm>
                {tracks}
                <button onClick={() => this.props.changePage('playlists', "")}>Voltar para Playlists</button>
            </PlaylistsContainer>
        )
    }
}

export default PlaylistDetail;
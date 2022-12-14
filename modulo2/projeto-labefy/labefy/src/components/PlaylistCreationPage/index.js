import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { axiosConfig, BASE_URL } from '../../constants'

const PlaylistCreationFromContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    border: solid 1px;
`

const PlaylistCreationForm = styled.form`
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

class PlaylistCreationPage extends React.Component {
    state = {
        inputNameValue: ""
    }

    changeInputNameValue = (event) => {
        this.setState({ inputNameValue: event.target.value })
    }

    createPlaylist = (event) => {
        event.preventDefault()
        const body = {
            name: this.state.inputNameValue
        }

        axios.post(BASE_URL, body, axiosConfig)
            .then(() => {
                alert("Playlist cadastrada com sucesso!")
            })
            .catch(err => {
                console.log(err)
            })
        this.setState({ inputNameValue: "" })
    }

    render() {
        return (
            <PlaylistCreationFromContainer>
                <h1>Cadastrar Nova Playlist</h1>
                <PlaylistCreationForm onSubmit={this.createPlaylist}>
                    <label>Nova Playlist</label>
                    <input
                        placeholder="Nome da playlist"
                        type="text"
                        value={this.state.inputNameValue}
                        onChange={this.changeInputNameValue}
                    />
                    <button type='submit'>Cadastrar Playlist</button>
                </PlaylistCreationForm>
            </PlaylistCreationFromContainer>
        )
    }
}

export default PlaylistCreationPage;
import React from 'react';
import styled from 'styled-components';

const TrackCardContainer = styled.div`
    margin: 20px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        display: flex;
        align-items: center;
    }
`

const TrackNameContainer = styled.h4`
    margin: 15px;
`

const ArtistContainer = styled.p`
    margin-right: 10px;
`

const DeleteButton = styled.p`
    color: red;
`

const TrackCard = (props) => {
    return (
        <TrackCardContainer>
            <div>
                <TrackNameContainer>{props.trackName} - </TrackNameContainer>
                <ArtistContainer>{props.artist}</ArtistContainer>
                <DeleteButton
                    onClick={() => props.removeTrackFromPlaylist(props.trackId)}
                >
                    X
                </DeleteButton>
            </div>
            <audio controls="controls">
                <source src={props.url} type="audio/ogg" />
            </audio>
        </TrackCardContainer>
    )
}

export default TrackCard
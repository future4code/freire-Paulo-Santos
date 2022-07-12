import React from "react";
import styled from "styled-components";


const CardContainer = styled.div`
    border: 1px solid red;
    min-width: 300px;
    display: flex;
    flex-grow: 1;
    flex-direction: column-reverse;
    justify-content: space-around;
    margin: auto;
    padding: 10px;
`

const CardUser = (props) => {
    return (
        <CardContainer>
            <p>Sobre a pessoa</p>
            <p>Nome, Idade</p>
            <img alt="foto da pessoa"/>
        </CardContainer>
    )
}

export default CardUser;
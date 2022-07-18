import React from "react";
import { useNavigate } from "react-router-dom";


function ListTripsPage() {

  const FormPage = useNavigate()
  const voltar = useNavigate()

  const goBack = () => {
    voltar(-1)
  }

  const inscreverSe = () => {
    FormPage("/trips/application")
  }
  return (
    <div>
        <h1>ListTripsPage</h1>
        <button onClick={goBack}>Voltar</button>
        <button onClick={inscreverSe}>Inscrever-se</button>
        <p>Aqui vão aparecer as viagens</p>
        <p>E ter um link para uma pagina pra se inscrever na viagem em questão</p>
    </div>
  );
}

export default ListTripsPage;

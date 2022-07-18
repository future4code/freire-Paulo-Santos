import React from "react";
import { useNavigate } from "react-router-dom";


function AdminHomePage() {

  const voltar = useNavigate()
  const criarViagem = useNavigate()

  const goBack = () => {
    voltar(-1)
  }

  const CreateTripPage = () => {
    criarViagem("/admin/trips/create")
  }

  return (
    <div>
        <h1>Painel Adminstrativo</h1>
        <p>3 botoes</p>
        <button onClick={goBack}>voltar</button>
        <button onClick={CreateTripPage}>criar viagem</button>
        <button>logout</button>
        <p>lista de viagens com opção de detalhes e excluir</p>
    </div>
  );
}

export default AdminHomePage;

import React from "react";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios";


function LoginPage() {
  
  const voltar = useNavigate()
  const AreaAdmin = useNavigate()

  const entrar = () => {
    AreaAdmin("/admin/trips/list")
  }

  const goBack = () => {
    voltar(-1)
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitLogin = () => {
    console.log(email, password)
    const body = {
      email: email,
      password: password
    }

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/futureX/:aluno/login", body
      )

      .them((response) => {
        console.log("Deu certo: ", response.data.token);
        localStorage.setItem("token", response.data.token);
        history.push("/");
      })
      .catch((error) => {
        console.log("Deu errado: ", error.response)
      })
  }

  return (
    <div>
        LoginPage
        <input 
          placeholder="email"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <input 
          placeholder="password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <button onClick={goBack}>Voltar</button>
        <button onClick={onSubmitLogin}>Entrar</button>
    </div>
  );
}

export default LoginPage;

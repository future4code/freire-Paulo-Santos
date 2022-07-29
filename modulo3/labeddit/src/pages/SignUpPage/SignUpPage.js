import React from "react";

export const SignUpPage = () => {
    return (
        <div>
            <p>aqui vai ter um header</p>
            <h2>Ola, boas vindas ao LabEddit ;)</h2>
            <input placeholder="Nome de usuario" />
            <input placeholder="E-mail" />
            <input placeholder="Senha" />
            <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
            <input type="checkbox" />
            <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
            <button>Cadastrar</button>
        </div>
    )
}
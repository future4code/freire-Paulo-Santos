import React, { useState , useEffect } from 'react'

const Usuarios = (props) => {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [bio, setBio] = useState("")
    const [foto, setFoto] = useState("")

    return (
        <div>
            <img src={foto}/>
        </div>
    )

}
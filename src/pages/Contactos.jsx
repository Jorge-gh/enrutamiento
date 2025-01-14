import React, { useState } from 'react'

export default function Contactos() {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [correo, setCorreo] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [completado, setCompletado] = useState("")

    function onSubmit(event) {
        event.preventDefault();
        setCompletado(true);
    }

    if (completado == true) {
        return <main className='mainReturn'>
            <h1 className='titulo'>Mensaje recibido,<br /> <p>Pronto estaremos en contacto.</p></h1>

            <article>
                <div className='headerArticle'>{nombre} {apellido}</div>
                <span><h1 className='textoTarjeta'>Mensaje</h1>{mensaje}</span>
                <span><h1 className='textoTarjeta'>Email</h1>{correo}</span>
            </article>
        </main>
    }
    return <div className='contactos'>
        <form onSubmit={onSubmit}>
            <h1 className='tituloFormulario'>Formulario</h1>
            <label>
                Nombre
                <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} required />
            </label>
            <label>
                Apellido
                <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} required />
            </label>
            <label>
                Email
                <input type="email" value={correo} onChange={(event) => setCorreo(event.target.value)} required />
            </label>
            <label>
                Mensaje
                <textarea value={mensaje} onChange={(event) => setMensaje(event.target.value)} required maxLength={250}></textarea>
            </label>
            <br />
            <input type="submit" value="Submit"/>
        </form>
    </div>
}
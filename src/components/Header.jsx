import React from 'react'
import { Link } from 'react-router'

import './Header.css'

export default function Header() {
    return (
        <header>
            <img src="/bx-home.svg" className='icon' />
            <nav>
                <Link to={'/'}>
                    Inicio
                </Link>
                <Link to={'/contactos'}>
                    Contactos
                </Link>
            </nav>
        </header>
    )
}

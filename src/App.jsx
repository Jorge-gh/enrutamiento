import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/header'
import Inicio from './pages/Inicio'
import Contactos from './pages/Contactos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Inicio />} />
          <Route path='contactos' element={<Contactos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

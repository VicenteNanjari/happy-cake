import './App.css'
import Header from './views/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './components/Contacto'
import NotFound from './components/NotFound'
import Inicio from './components/Inicio'


function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

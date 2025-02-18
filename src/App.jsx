import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './styles/App.css'
import Header from './components/Header'
import Juegos from './vistas/Juegos';
import Instrucciones from './vistas/instrucciones';
import Puntos from './vistas/puntos';

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
         <Route path="/" element={<Juegos/>} />
         <Route path="/instrucciones" element={<Instrucciones/>} />
         <Route path="/puntos" element={<Puntos/>} />
      </Routes>
    </>
  )
}

export default App

import { useState, useEffect } from 'react';
import './cuadricula.css'
import { matriz } from '../lib/cuadricula';
import Pacman from '../lib/pacman';
import Fantasma from '../lib/fantasma';


export default function Juegos(){
   const [cuadro, setCuadro] = useState(matriz);
   const [points, setPoints] = useState(0);
   const [pacman, setPacman] = useState(new Pacman());
   const [fantasmas, setFantasmas] = useState([]);

   useEffect(() => {
      const nuevoCuadro = [...cuadro];
      nuevoCuadro[pacman.y][pacman.x] = 2;
      
      const nuevoFantasmas = [];
      for (let i = 0; i < 5; i++) {
         const fantasma = new Fantasma();
         fantasma.generaPosicionAleatoria();
         nuevoCuadro[fantasma.y][fantasma.x] = 3;
         nuevoFantasmas.push(fantasma);
      }

      setFantasmas(nuevoFantasmas);
      setCuadro(nuevoCuadro);

    }, []);

    useEffect(() => {
      function Teclas(event){
         switch(event.key) {
            case "ArrowRight":
               moverDer();
               break;
            case "ArrowLeft":
               moverIzq();
               break;
            case "ArrowDown":
               bajar();
               break;
            case "ArrowUp":
               subir();
               break;
            default:
               break;
         }
      };

      window.addEventListener("keydown", Teclas);
      return () => window.removeEventListener("keydown", Teclas);
      
   }, [pacman]);

   function moverDer(){
      if (!Colision(pacman.x + 1, pacman.y)) {
        actualizarPosicion(pacman.x, pacman.y, pacman.x + 1, pacman.y);
      }
    }
    
    function moverIzq(){
      if (!Colision(pacman.x - 1, pacman.y)) {
        actualizarPosicion(pacman.x, pacman.y, pacman.x - 1, pacman.y);
      }
    }
    
    function bajar(){
      if (!Colision(pacman.x, pacman.y + 1)) {
        actualizarPosicion(pacman.x, pacman.y, pacman.x, pacman.y + 1);
      }
    }
    
    function subir(){
      if (!Colision(pacman.x, pacman.y - 1)) {
        actualizarPosicion(pacman.x, pacman.y, pacman.x, pacman.y - 1);
      }
    }

   function actualizarPosicion(antiguaX, antiguaY, x, y){
      const nuevoCuadro = [...cuadro];
      nuevoCuadro[antiguaY][antiguaX] = 0; // borrar antigua posicion
      nuevoCuadro[y][x] = 2; // dibujar nueva posicion

      setPacman({ ...pacman, x: x, y: y });
      setCuadro(nuevoCuadro);
   }

   function Colision(x, y) {
      if (x < 0 || x >= 20 || y < 0 || y >= 20) {
        console.log('colision');
        return true;
      }
      return false;
    }

   return (
      <>
        <div className="points">Puntos: {points}</div>
        <div className="panel">
          {cuadro.map((row, rowIndex) => (
            row.map((cell, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} className={`cuadrado ${cell == 2 ? 'pacman' : cell == 3 ? 'fantasma' : ''}`}/>
            ))
          ))}
        </div>
      </>
    );
}
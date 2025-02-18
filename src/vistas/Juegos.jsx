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
class Fantasma{
   constructor(){
      this.numero = 3
      this.estado = 'vivo' //vivo o muerto
      this.x = 0
      this.y = 0
   }

   generaPosicionAleatoria() {
      this.x = Math.floor(Math.random() * 20);
      this.y = Math.floor(Math.random() * 20);
    }

}

export default Fantasma;
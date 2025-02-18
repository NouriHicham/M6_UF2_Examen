import { Link } from "react-router-dom";

export default function Header(){
   return (
      <>
         <header>
            <nav className="navbar navbar-light bg-light">
               <div className="">
               <div>
                  <button class="btn btn-secondary ms-2"><Link className="nav-link" to="/">Juego</Link></button>
                  <button class="btn btn-secondary ms-2"><Link className="nav-link" to="/instrucciones">Instrucciones</Link></button>
               </div>
               </div>
            </nav>
         </header>
         <div className="container mt-4">
         </div>
      </>
   );
}
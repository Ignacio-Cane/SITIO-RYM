import {Link} from "react-router-dom";
import './Navegacion.css';

export default function Navegation() {
    return(
       <header className="navbar d-flex p-5 w-100">
            <h1>Rick & Morty </h1>
            <nav>
                <ul className="d-flex ">
                    <li className="mx-2"> 
                        <Link className="link btn btn-active" to="/">Home</Link>
                    </li>
                    <li className="mx-2">
                        <Link className="link btn btn-active" to="/Characters"> Characters</Link>
                    </li>
                    <li className="mx-2">
                        <Link className="link btn btn-active" to="/Contact"> Contact</Link>
                    </li>
                </ul>
            </nav>
       </header>
    )
}
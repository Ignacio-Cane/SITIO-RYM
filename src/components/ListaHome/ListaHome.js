import {Link} from "react-router-dom";
import "./Botones.css";
export default function ListaHome ({dato,infoPath}){
   
   

    return(
        <li className="btn btn-secondary">
            <Link className="estilo"  to={infoPath}>{dato}</Link> 
        </li>
    )
}
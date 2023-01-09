import { Fragment } from "react";
import ListaHome from "../ListaHome/ListaHome"
import "./Home.css";
export default function Home (){
    return(
            <div className="principal container-fluid d-flex justify-content-center align-items-center">
                <main className="padre d-flex flex-column justify-content-center align-items-center">
                    <h1 className="row justify-content-center">PROYECT - Rick and Morty </h1>
                    <div className="row align-items-center lista">
                        <ul className="botones">
                            <ListaHome  dato= "Characters" infoPath="/Characters"/>
                            <ListaHome  dato= "Contact" infoPath="/Contact" />
                        </ul>
                    </div>
                </main>
            </div>
       
    )
} 
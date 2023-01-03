import ListaHome from "../ListaHome/ListaHome"
import "./Home.css"

export default function Home (){
    return(
        <header className="container-fluid  d-flex flex-column justify-content-center align-items-center">
            <div className="row padre">
                <h1 className="">PROYECT - Rick and Morty </h1>
                <nav>
                    <ul>
                        <ListaHome dato= "Characters" />
                        <ListaHome dato= "Contact" />
                    </ul>
                </nav>
            </div>
        </header>
    )
} 
import Card from "../Card/Card";
import "./SeccionCards.css"

export default function SeccionCards({datos}){ 
    return(
        <section className="tarjetas">
           {datos.map((dato)=>{ 
                return <Card key={dato.id} info={dato}/>
            })} 
        </section>
    )
}
   

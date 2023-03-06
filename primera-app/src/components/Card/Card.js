import {useState} from 'react';
import "./Card.css"
export default function Card({info}) {
    const[ocultar,setOcultar]=useState(true);

    const mostrar =()=>{
        console.log(info)
        setOcultar(false) 
    }

    const ocularInfo=()=>{
        setOcultar(true) 
    }

    return(
        <section className="cards ">
            <div >
                <img src={info.image} alt={info.name}/>
                <h2 >{info.name}</h2>

                <button onClick={mostrar} className={ ocultar === true ?"fondo btn btn-active d-flex align-self-end":"d-none"}>Now More..</button>  
   
            </div>
            {ocultar ===false?
                <div className='extension p-2 d-flex flex-column align-items-center justify-content-start'>
                    <button className="fondo btn btn-active d-flex align-self-end m-2" onClick={ocularInfo}>X</button>
                    <ul className="list-group">
                        <li className="info">Character Status {info.status}</li>
                        <li className="info">Species {info.species}</li>
                        <li className="info">Origin {info.origin.name}</li>
                        <li className="info">Gender {info.gender}</li>
                    </ul>
                </div>:''
            }
        </section>
    )
}     

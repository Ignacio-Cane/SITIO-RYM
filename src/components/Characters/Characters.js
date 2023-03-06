import{useEffect, useState} from 'react';
import { Fragment } from 'react';

import Navegation from '../Navegation/Navegation';
import Filtros from "../Filtros/Filtros";
import SeccionCards from '../SeccionCards/SeccionCards';



export default function Characters(){
    let [datos,setDatos]=useState([]);
    let [infoCompleta,setInfoCompleta]=useState([]);
    
    const mostrarValor =(event)=>{
        if(event.target.checked){

            let datoFiltro=event.target.value;    
                if(datoFiltro === "Alive" || datoFiltro === "Dead"){
                    let resultado= datos.filter((ch)=> ch.status === datoFiltro)
                    setDatos(resultado)
                }
                if(datoFiltro=== "Female" || datoFiltro==="Male"){
                    let resultado= datos.filter((ch)=> ch.gender === datoFiltro)
                    setDatos(resultado)  
                }
                if(datoFiltro=== "unKnown"){
                    let resultado= datos.filter((ch)=> ch.origin.name === datoFiltro)
                    setDatos(resultado)  
            }
        }else{
            setDatos(infoCompleta)
    }   
} 


    const traerInfo=async()=>{
 
        let info= await fetch("https://rickandmortyapi.com/api/character")
                        .then(respuesta => respuesta.json())
                        .catch(error => console.log("HAY UN ERROR!!" +error))
        return info
        
    }

    
    const mostarInfo =async ()=>{
        let dato= await traerInfo()
        let infoPersonajes= dato.results
        console.log(infoPersonajes)
        setDatos(infoPersonajes)
        setInfoCompleta(infoPersonajes)

    }

    useEffect(()=>{
        mostarInfo() 
},[])

    return(
        <Fragment>
            <Navegation />
            <main className='container mx-5'>
            <h2 className='row p-4 letra'>Filtros</h2>
            <section className='d-flex p-4 justify-content-between'>
                <Filtros nombreFiltro="Character Alive" datoFiltro="Alive" muestraValor={mostrarValor}/> 
                <Filtros nombreFiltro="Character Dead" datoFiltro="Dead" muestraValor={mostrarValor}/> 
                <Filtros nombreFiltro="Male" datoFiltro="Male" muestraValor={mostrarValor}/> 
                <Filtros nombreFiltro="Female" datoFiltro="Female" muestraValor={mostrarValor}/>
                <Filtros nombreFiltro="Origin Unknown" datoFiltro="Unknow" muestraValor={mostrarValor}/> 
            </section>
            </main>
                          
            <SeccionCards datos={datos} />
        </Fragment>
    )
 }

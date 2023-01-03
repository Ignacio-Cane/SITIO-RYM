

export default function ListaHome ({dato}){
   
    const mostrar =()=>{
        console.log(dato)
    }

return(
    <li onClick={mostrar}>{dato}
        
    </li>
)
}
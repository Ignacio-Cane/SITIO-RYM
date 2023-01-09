import "./Filtros.css";
export default function Filtros({nombreFiltro,datoFiltro,muestraValor}) {
    return(
        <div className="form-check form-switch  filtros px-5 py-2 ">
            <input className="form-check-input" type="checkbox" role="switch" id={datoFiltro} value={datoFiltro} onChange={muestraValor}/>
            <label className="form-check-label" htmlFor={nombreFiltro}>{nombreFiltro}</label>
        </div>
    )
}


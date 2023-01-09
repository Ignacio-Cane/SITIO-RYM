import { Fragment } from 'react';
import Navegation from '../Navegation/Navegation'
import "./Contact.css"
export default function Contact(){
    
    return(
        <Fragment>
            <Navegation/>
            <div className='form d-flex flex-column '>
                <h2 className='letraFormulario'>Contact</h2>
                <h3 className='letraFormulario'>Leave us your information so we can contact you</h3>
                <form className="row g-3 mx-4" action=''>
                    <div className="col-md-6">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" />

                    </div>
                    <div className="col-md-6">
                        <label htmlFor="correo" className="form-label">Email</label>
                        <input type="email" className="form-control" id="correo" />
                    </div>  
                    <div className="col-12">
                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                        <textarea id="mensaje" className="form-control"></textarea>
                    </div>
                    
                    <div className="col-12">
                    <button type="submit" className="btn enviar ">Sign in</button>
                    </div>
                </form>
           </div>
        </Fragment>
        
    )
} 

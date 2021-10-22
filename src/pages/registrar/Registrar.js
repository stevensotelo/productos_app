import React from "react";
import ProductoService from "../../services/ProductoService";

function Registrar() {
    const [name,setName] = React.useState();
    const [description,setDescription] = React.useState();
    const [value,setValue] = React.useState();
    const [msg,setMsg] = React.useState();

    function handleName(e){
        setName(e.target.value);
    }

    function handleValue(e){
        setValue(e.target.value);
    }

    function handleClick(){
        ProductoService.insert(name,description,value)
            .then((data)=>{
                setMsg("Producto guardado");
            },
            error=>{
                console.log(error);
            })
    }

    return (
        <form>            
            <h1 className="h3 mb-3 fw-normal">Registrar producto</h1>

            <div className="form-floating">
                <input type="text" className="form-control" id="name" placeholder="Manzanas" onChange={handleName} />
                <label htmlFor="name">Nombre</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="description" placeholder="Frutas y verduras" onChange={(e)=>{setDescription(e.target.value)}} />
                <label htmlFor="description">Descripción</label>
            </div>
            <div className="form-floating">
                <input type="numeric" className="form-control" id="value" placeholder="5000" onChange={handleValue} />
                <label htmlFor="value">Valor</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" onClick={handleClick}>Registar</button>
            <div className="form-floating">
                <p className="text-info">{msg}</p>
            </div>
        </form>
    );
}

export default Registrar;
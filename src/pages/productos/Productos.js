import React from "react";
import Producto from "../../components/producto/Producto";
import productoService from "../../services/ProductoService";

function Productos(){
    const [prods,setProds] = React.useState();

    React.useEffect(
        () => {
            productoService.list()
                            .then((data)=>{
                                setProds(data);
                            },error=>{
                                console.log(error);
                            })
            return undefined;
        },
        []);
    return (
        <div className="row">
        {prods ? prods.map((item,idx)=>(            
            <Producto key={idx} name={item.nombre} description={item.descripcion} />
        )):""
        }
        </div>
    );
}

export default Productos;
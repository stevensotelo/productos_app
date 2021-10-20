import React from 'react';
import './Home.css';
import Producto from '../../components/producto/Producto';
function Home() {
    const [prods, setProds] = React.useState([{ name: "Peras", description: "Frutas", value: 500 }, { name: "Papas", description: "Verdura", value: 300 }]);
    const [counter, setCounter] = React.useState(0);

    return (
        <div className="container marketing">
            <div className="row">
                {prods ? prods.map((item, idx) => (
                    <Producto name={item.name} description={item.description} />
                )) : ""}
            </div>
            <button onClick={() => { setProds(prev => prev.push({ name: "Manzanas", description: "Frutas", value: 600 })) }}>
                Agregar Manzanas
            </button>
            <button onClick={() => { setCounter(prev => prev + 1) }}>
                Reacciones {counter}
            </button>
        </div>
    );
}

export default Home;
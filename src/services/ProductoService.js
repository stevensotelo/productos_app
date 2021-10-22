import axios from 'axios';

import Configuration from '../conf/Configuration';

class ProductoService {
    insert(name,description,value){
        return axios
                .post(Configuration.get_url_service() + "productos",
                    {nombre:name, descripcion:description, valor:value})
                .then(response=>{     
                    console.log(response.data);               
                    return response.data;
                });
    }

    list(){
        return axios
            .get(Configuration.get_url_service() + "productos",{})
            .then(response=>{
                console.log(response.data);
                return response.data;
            });
    }
}

export default new ProductoService();
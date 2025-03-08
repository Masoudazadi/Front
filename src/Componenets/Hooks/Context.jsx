import {createContext, useState} from 'react';

const Contexts= createContext([]);

function Context({children}) {
    const [selectedProduct, setSelectedProduct] = useState([]);


    return (
        <Contexts.Provider  value={{selectedProduct, setSelectedProduct}}>
            {children}
        </Contexts.Provider>

)
}

export { Contexts };
export default Context

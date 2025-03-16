import Offer from "./Offer.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import {useContext} from "react";
import {Contexts} from "./Hooks/Context.jsx";
import Empty from "./Empty.jsx";
import Basket from "./Basket.jsx";


function EmptyBasket() {
    const {selectedProduct } = useContext(Contexts);

    return (
        <>
          <Offer/>
            <Navbar/>
            {selectedProduct.length===0 ? <Empty/> : <Basket/>}
            <Footer/>
        </>
    )
}

export default EmptyBasket

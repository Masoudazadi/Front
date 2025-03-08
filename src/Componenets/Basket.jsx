import Offer from "./Offer.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {useContext, useState} from "react";
import {Contexts} from "./Hooks/Context.jsx";
import Empty from "./Empty.jsx";

function Basket() {
    const {selectedProduct,setSelectedProduct } = useContext(Contexts);


    function increment(product){
        setSelectedProduct((prev)=>[...prev], product.quantity++);
        }
        function decrement(product){
            setSelectedProduct((prev)=>[...prev], product.quantity--);
        }
console.log(selectedProduct)
    function removeProduct(product){
        const currentProduct = selectedProduct.filter((pro)=>pro.id !== product.id);
        setSelectedProduct(currentProduct);
    }
    return (
        <>
            <div className="w-full my-[180px]  h-full ">
                <div className="hidden h-full sm:mx-[135px] my-8  py-3 sm:flex  sm:flex-row sm:h-[72px] w-auto justify-between items-center sm:p-4 shadow-[1px_1px_9px_0px_#e2e8f0] ">
                    <span className="text-base sm:w-[40%]"> Products</span>
                    <span className="text-base sm:w-[10%]"> Price</span>
                    <span className="text-base"> Quantity</span>
                    <span className="text-base sm:w-[10%]"> Subtotal</span>
                </div>

                {selectedProduct.map((product,index) =>
                        <div key={index} className="h-full sm:mx-[135px] m-8 py-3 flex flex-col lg:flex-row lg:h-[72px] w-auto justify-between items-center lg:p-4 shadow-[1px_1px_9px_0px_#e2e8f0]">
                           <div className="flex flex-col lg:flex-row sm:w-[40%] items-center h-full">
                                <div className="flex flex-row ">
                                    <button type="button" className="  bg-red-500 rounded-full p-2 -mr-2 flex flex-row items-center justify-center w-7 h-7" onClick={() => removeProduct(product)}>
                                        <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <img src={`http://127.0.0.1:5000${product.image}`} className=" w-auto h-[50px] rounded "/>
                                </div>
                               <span className="h-auto">{product.name}</span>
                           </div>
                            <span className="text-base sm:w-[10%]">{product.price} $</span>
                            <div className="flex flex-row items-center w-auto border rounded">
                                <span className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 "> {product.quantity} </span>
                                <div className="flex flex-col items-center justify-between">
                                    <button type="button" id="decrement-button" data-input-counter-decrement="counter-input"
                                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md" onClick={()=>increment(product)} disabled={product.quantity=== product.inventory}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                             stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
                                        </svg>
                                    </button>
                                    <button type="button" id="increment-button" data-input-counter-increment="counter-input"
                                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md" onClick={()=>decrement(product)} disabled={product.quantity === 1}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                             stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                                        </svg>

                                    </button>
                                </div>
                            </div>
                            <span className="text-base sm:w-[10%]">{product.price *product.quantity} $</span>
                        </div>)
                    }
                         <div className="h-full sm:mx-[135px] flex flex-col gap-3 sm:flex-row sm:h-[72px] w-auto justify-between items-center p-8 sm:p-0">
                                <button className="w-full sm:w-[218px] h-auto sm:h-[56px] border rounded border-black p-5  break-all " >Return To Shop</button>
                                <button className="w-full sm:w-[218px] h-auto sm:h-[56px] border rounded border-black p-5 break-all" >Update Cart</button>
                             </div>
                <div className="h-full sm:mx-[135px] m-8 md:py-3 flex flex-col lg:flex-row gap-3 justify-between items-center sm:items-baseline">
                    <div className="w-full sm:w-auto sm:p-0 flex flex-col sm:flex-row gap-11">
                        <input placeholder="Coupon Code " className=" w-auto  h-[56px]  p-2 border border-black rounded break-all"/>
                        <button className="w-auto sm:w-[211px] h-[56px] border rounded text-white   bg-red-500 break-all" >Apply Coupon</button>
                    </div>
                    <div className="flex flex-col items-start border  mb-10 border-black rounded w-full sm:w-[470px] h-full sm:h-[324px] p-4 m-4 sm:m-0 gap-4 ">

                        <span className="text-[20px] break-all">Cart Total:</span>
                        <div className="w-full flex flex-row justify-between">
                            <span className="text-base break-all">Subtotal:</span>
                            <span className="text-base break-all">{selectedProduct.reduce((acc, item)=>acc + item.price * item.quantity, 0)}</span>
                        </div>
                        <hr className="w-full"/>
                        <div className="w-full flex flex-row justify-between">
                            <span className="text-base break-all">Shipping:</span>
                            <span className="text-base break-all">0</span>
                        </div>
                        <hr className="w-full"/>
                        <div className="w-full flex flex-row justify-between">
                            <span className="text-base break-all">Total:</span>
                            <span className="text-base break-all ">{selectedProduct.reduce((acc, item)=>acc + item.price * item.quantity, 0)}</span>
                        </div>
                        <div className="w-full flex flex-row justify-center">
                            <button className=" w-auto md:w-[260px] h-[56px] border rounded text-white bg-red-500 item break-all p-5" >Procees to checkout</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Basket

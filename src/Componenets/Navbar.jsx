import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {Contexts} from "./Hooks/Context.jsx";
import { useContext } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const {selectedProduct,setSelectedProduct } = useContext(Contexts);

    function logOut() {
        localStorage.removeItem("authToken");
        setSelectedProduct([])
        navigate("/")
    }
    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="h-[93px] gap-10 flex flex-row justify-between md:justify-around items-center px-4 md:px-0">
                <h1 className=" text-base sm:text-2xl font-semibold">Exclusive</h1>
                <button className="block md:hidden text-gray-500 hover:text-gray-700 focus:outline-none" onClick={() => setMenuOpen((prev) => !prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>
                <div className={`${menuOpen ? "block" : "hidden"} absolute py-2  top-[93px] left-0 w-full bg-white border-t border-gray-200 md:static md:flex md:w-auto md:border-0`}>
                    <ul className="flex flex-col md:flex-row items-end gap-6 p-4 md:p-0">
                        <NavLink className={({ isActive }) => isActive ? "underline" : "cursor-pointer"}  to={"/"}> Home</NavLink>
                        <NavLink disabled> Contact</NavLink>
                        <NavLink > About</NavLink>
                        {!localStorage.getItem("authToken") && <NavLink className={({ isActive }) => isActive ? "underline" : "cursor-pointer"}  to={"/Login"}> Sign Up</NavLink>}
                        {!localStorage.getItem("authToken") && <NavLink className={({ isActive }) => isActive ? "underline" : "cursor-pointer"}  to={"/register"}> Sign In</NavLink>}
                    </ul>
                <div  className="flex flex-col items-end justify-center gap-6 md:hidden py-4">
                    <div className="flex items-center justify-center mt-4 md:hidden px-4 ">
                        <input
                            placeholder="What are you looking for?"
                            className="w-full bg-gray-100 border border-gray-300 rounded pl-5 pr-10 py-2 outline-none "
                        />
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="absolute right-6 text-gray-400"
                        />
                    </div>
                    { localStorage.getItem("authToken") &&
                        <div className="flex flex-row justify-around">
                    <button className="px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                    <NavLink className="px-4 relative inline-flex items-center p-3 text-sm font-medium text-center" to="eshop">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-2 ">{selectedProduct.length}</div>
                    </NavLink>
                    <button className="px-4" onClick={logOut}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg>
                    </button>
                        </div>}

                </div>
                </div>
                <div className=" hidden md:flex flex-row items-center gap-6">
                <div className="hidden md:flex items-center relative">
                    <input
                        placeholder="What are you looking for?"
                        className=" border rounded pl-5 pr-10 py-2 outline-none  "
                    />
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="absolute right-3 text-gray-400"
                    />
                </div>

                    { localStorage.getItem("authToken")
                        &&
                        <div className="flex flex-row justify-around gap-4">
                   <button>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                       </svg>
                   </button>

                   <NavLink to="/eshop" className="relative inline-flex items-center p-3 text-sm font-medium text-center ">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                       </svg>
                       <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-2 ">{selectedProduct.length}</div>
                   </NavLink>
                   <button onClick={logOut}>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                       </svg>
                   </button>

                    </div>}

                </div>

            </div>
        </nav>
    );
}

export default Navbar;

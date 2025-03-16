import { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faEye} from '@fortawesome/free-regular-svg-icons'
import useRequests from "./useRequests.js";
import Timer from "./Timer.jsx";
import FlashSealsSkeleton from "./FlashSealsSkeleton.jsx";
import Modal from "./Modal.jsx";
import {Contexts} from "./Hooks/Context.jsx";
import { useContext } from 'react';
import {url} from "./useRequests.js"

function FlashSeals() {
    const {products}=useRequests();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const {selectedProduct,setSelectedProduct } = useContext(Contexts);

    function addToBasket(product) {
        setSelectedProduct((prev)=>[...prev, product])
        setSelectedProduct((prev)=> prev.map(item => item.id === product.id ? { ...item, quantity: 1 } : item))
    }
    function handleModal(product){
     setOpenModal((prev)=>!prev);
     setModalImage(product.image)}
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    const handleNext = () => {
        if (currentIndex < products.length -5) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <>
            {products.length==0? <FlashSealsSkeleton /> : <div className="mx-5 lg:mr-0 xl:ml-40 mt-[142px] h-auto" >
                <div >
                    <div className="w-auto flex flex-row gap-4 items-center">
                        <span className='inline-block w-5 h-10 bg-red-600 rounded'></span>
                        <span className='text-base text-red-600'>Today’s</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-20 lg:gap-0 items-start lg:flex-row lg:justify-between mt-6">
                    <div className="flex flex-col justify-center items-center w-full gap-10 lg:w-auto lg:flex-row lg:gap-[87px]">
                        <div className="text-4xl">Flash Sales</div>

                       <Timer/>

                    </div>
                    <div className=" hidden xl:flex xl:flex-row justify-between gap-2 w-full lg:w-auto items-end  top-1/2 transform -translate-y-1/2 px-4 mr-[120px]">
                        <button
                            onClick={handlePrev}
                            className={`group !p-2 flex justify-center items-center border border-solid  w-[46px] h-[46px] transition-all duration-500 rounded-full  ${
                                currentIndex ===  0? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={currentIndex === 0}
                        >
                            <svg fill="#000000"
                                 height="16px" width="16px" version="1.1" id="Layer_1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                 viewBox="0 0 330 330" xmlSpace="preserve" transform="rotate(180)"><g id="SVGRepo_bgCarrier"
                                 strokeWidth="0">
                                </g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"> </g>
                                <g id="SVGRepo_iconCarrier">
                                <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g>
                            </svg>

                        </button>

                        <button
                            onClick={handleNext}
                            className={`group !p-2 flex justify-center items-center border border-solid w-[46px] h-[46px] transition-all duration-500 rounded-full  ${
                                products.length -5 < 0 || currentIndex === products.length -5  ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={products.length -5<0 ||currentIndex === products.length -5}
                        >

                            <svg xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                 fill="#000000" height="16px" width="16px" version="1.1" id="Layer_1"
                                 viewBox="0 0 330 330" xmlSpace="preserve">
                                <path id="XMLID_27_"
                                      d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
                            </svg>

                        </button>
                    </div>
                </div>
                <div className="w-full relative overflow-hidden mt-[40px]">
                    <div  className="flex justify-center xl:justify-between flex-wrap gap-y-5 xl:gap-y-0 xl:flex-nowrap transition-transform duration-500"  style={{transform: `translateX(-${currentIndex * (270+30)}px)`}}>
                        {products.map((product, index) => (
                            <div key={index} className="md:flex-shrink-0 flex flex-col  justify-center items-start mr-[30px] gap-4 ">
                                <div className="relative group" >
                                    <img src={`${url}${product.image}`}  className="  w-[270px] h-[250px] rounded" />
                                    {!localStorage.getItem("authToken")
                                        ?
                                        <button className="absolute bg-black text-white w-full top-[209px] bottom-0 text-base opacity-100 xl:opacity-0 group-hover:opacity-100  transition-opacity duration-700 ease-in-out rounded-b"
                                          disabled={true}>
                                        Log in for Adding to Basket
                                        </button>
                                        :
                                        <button className={selectedProduct.some(p=> p.id === product.id)? "absolute bg-green-400 text-white w-full top-[209px] bottom-0 text-base opacity-100  group-hover:opacity-100  transition-opacity duration-700 ease-in-out rounded-b": "absolute bg-black text-white w-full top-[209px] bottom-0 text-base opacity-100 xl:opacity-0 group-hover:opacity-100  transition-opacity duration-700 ease-in-out rounded-b"}
                                                onClick={()=>addToBasket(product)}  disabled={selectedProduct.some(p=> p.id === product.id)}>
                                            Add to card
                                        </button>
                                    }


                                    <div className=" absolute mx-2 my-2 top-0 right-0 w-[30px] h-[76px] flex flex-col justify-between items-center">
                                        <button className=" w-[34px] h-[34px] bg-white rounded-full flex flex-row justify-center items-center">
                                            <FontAwesomeIcon  icon={faHeart}  className="h-[24px] w-[24px] text-gray-400" />
                                        </button>
                                        <button className=" w-[34px] h-[34px] bg-white rounded-full flex flex-row justify-center items-center"  onClick={()=> handleModal (product)} >
                                            <FontAwesomeIcon  icon={faEye}   className="h-[24px] w-[24px] text-gray-400" />
                                        </button>
                                    </div>

                                    {product.inventory >5?  <span className=" absolute top-0 mx-2 my-2 w-[55px] h-[26px] bg-red-500 rounded px-[10px] flex flex-row items-center justify-center ">
                                        <span className="text-white text-[12px]">-20%</span>
                                    </span>: ""}


                                </div>
                                <div className="flex flex-col gap-2 w-[270px]">
                                    <span className="text-base text-black">{product.name}</span>
                                    <div className="flex flex-row gap-3" >
                                        <span className="text-base text-red-600"> ${product.price}</span>
                                        <strike className="text-base text-gray-400"> $190</strike>
                                    </div>
                                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                                        ⭐ {product.numOfReviews}

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center my-[60px] w-auto lg:mr-[120px]">
                    <button className="bg-red-500 w-[234px] h-[56px] rounded text-base text-white">view all Products</button>
                </div>
                <div className="xl:mr-[120px]">
                    <hr ></hr>
                </div>
                <Modal openModal={openModal} setOpenModal={setOpenModal}  modalImage={modalImage}/>
            </div>}
        </>
    )
}

export default FlashSeals





import Image from "../assets/phone.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faHeart} from "@fortawesome/free-regular-svg-icons";
import {useRequests,BASE_URL} from "./useRequests.js";
import Modal from "./Modal.jsx";
import {useState} from "react";
import getClosestTailwindColor from "../utils/colorHelper.js";

function OurProducts() {
    const {products}= useRequests()
    const[openModal, setOpenModal] = useState(false);
    const[modalImage, setModalImage] = useState(null);

    function handleModal(bestSellingProduct){
        setOpenModal(true);
        setModalImage(bestSellingProduct.image)
    }
    let ourProducts=[]

    if (!products){
        return
    }else{
        ourProducts=products.filter((product)=> product.inventory>4 )
    }


    return (
        <div className="mx-5 lg:mr-[135px] xl:ml-40 mt-[142px] h-auto " >
            <div >
                <div className="w-auto flex flex-row gap-4 items-center">
                    <span className='inline-block w-5 h-10 bg-red-600 rounded'></span>
                    <span className='text-base text-red-600'>Our Products</span>
                </div>
            </div>

            <div className="flex flex-col justify-center gap-20 lg:gap-0 items-start lg:flex-row lg:justify-between mt-6">
                    <div className="text-4xl">Explore Our Products</div>
            </div>

            <div className="w-full relative overflow-hidden mt-[40px]">
                <div
                    className="flex flex-row justify-center xl:justify-between gap-[20px]  flex-wrap transition-transform duration-500"
                >
                    {ourProducts.map((ourProduct, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex flex-col w-[270px] h-[350px]  justify-center items-start  "
                        >
                            <div className="relative group" >
                                <img src={`BASE_URL${ourProduct.image}`}  className=" w-full h-[full rounded "  />
                                <button className=" absolute bg-black text-white w-full top-[209px] bottom-0 text-base opacity-100 xl:opacity-0 group-hover:opacity-100  transition-opacity duration-500 ease-in-out rounded-b" >
                                    Add to card
                                </button>

                                <div className=" absolute mx-2 my-2 top-0 right-0 w-[30px] h-[76px] flex flex-col justify-between items-center">
                                    <button className=" w-[34px] h-[34px] bg-white rounded-full flex flex-row justify-center items-center">
                                        <FontAwesomeIcon  icon={faHeart}  className="h-[24px] w-[24px] text-gray-400" />
                                    </button>
                                    <button className=" w-[34px] h-[34px] bg-white rounded-full flex flex-row justify-center items-center" onClick={()=> handleModal (ourProduct)}>
                                        <FontAwesomeIcon  icon={faEye}   className="h-[24px] w-[24px] text-gray-400" />
                                    </button>
                                </div>

                                {ourProduct.inventory >7?  <span className=" absolute top-0 mx-2 my-2 w-[55px] h-[26px] bg-red-500 rounded px-[10px] flex flex-row items-center justify-center ">
                                        <span className="text-white text-[12px]">-20%</span>
                                    </span>: ""}

                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-base text-black">{ourProduct.name}</span>
                                <div className="flex flex-row gap-3" >
                                    <span className="text-base text-red-600"> ${ourProduct.price}</span>
                                    <strike className="text-base text-gray-400"> $190</strike>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                                    ⭐ {ourProduct.numOfReviews}
                                    <span className="text-gray-400">(4.5)</span>
                                    {ourProduct.colors.map(color => <button key={color} style={{backgroundColor:color}} className=" w-[20px] h-[20px] rounded-full  hover:border-black border hover:outline-white "></button>)}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <div className=" my-[60px] flex flex-row justify-center">
                    <button className= "flex justify-center items-center  bg-red-500 text-white text-base w-[159px] h-[56px] rounded">
                        View All
                    </button>
                </div>
                <Modal openModal={openModal} setOpenModal={setOpenModal}  modalImage={modalImage}/>
            </div>

        </div>
    )
}

export default OurProducts

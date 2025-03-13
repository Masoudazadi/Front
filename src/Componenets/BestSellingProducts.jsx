import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faEye} from '@fortawesome/free-regular-svg-icons'
import useRequests from "./useRequests.js";
import Modal from "./Modal.jsx";
import {useState} from "react";
import {url} from "./useRequests.js"


function BestSellingProducts() {
    const{products}=useRequests();
    const[openModal, setOpenModal] = useState(false);
    const[modalImage, setModalImage] = useState(null);
    function handleModal(bestSellingProduct){
        setOpenModal(true);
        setModalImage(bestSellingProduct.image)
    }

    let bestSellingProducts =[];

    if (!products){
        return
    }else{
        bestSellingProducts=products.filter((product)=> product.averageRating>4 )
    }



    return (
        <div className="mx-5 lg:mr-[135px] xl:ml-40 mt-[142px] h-auto " >
            <div >
                <div className="w-auto flex flex-row gap-4 items-center">
                    <span className='inline-block w-5 h-10 bg-red-600 rounded '></span>
                    <span className='text-base text-red-600'>This Month</span>
                </div>
            </div>

            <div className="flex flex-col justify-center gap-20 lg:gap-0 items-start lg:flex-row lg:justify-between mt-6">
                <div className="flex flex-col justify-center items-center w-full gap-10  lg:flex-row lg:justify-between lg:items-center ">
                    <div className="text-4xl">Best Selling Products</div>
                    <button className= "flex justify-center items-center  bg-red-500 text-white text-base w-[159px] h-[56px] rounded">
                        View All
                    </button>
                </div>

            </div>

            <div className="w-full relative overflow-hidden mt-[40px]">
                <div
                    className="flex flex-row justify-center xl:justify-between gap-[20px]  flex-wrap"
                >
                    {bestSellingProducts.map((bestSellingProduct, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex flex-col w-[270px] my-[60px] h-[350px]  justify-center items-start  "
                        >
                            <div className="relative group" >
                                <img src={`${url}${bestSellingProduct.image}`}  className=" w-full h-[full rounded "  />
                                <button className=" absolute bg-black text-white w-full top-[209px] bottom-0 text-base opacity-100 xl:opacity-0 group-hover:opacity-100  transition-opacity duration-500 ease-in-out rounded-b" >
                                    Add to card
                                </button>

                                <div className=" absolute mx-2 my-2 top-0 right-0 w-[30px] h-[76px] flex flex-col justify-between items-center">
                                    <button className=" w-[34px] h-[34px] bg-white rounded-full flex flex-row justify-center items-center">
                                        <FontAwesomeIcon  icon={faHeart}  className="h-[24px] w-[24px] text-gray-400" />
                                    </button>
                                    <button className=" w-[34px] h-[34px] bg-white rounded-full flex flex-row justify-center items-center" onClick={()=> handleModal (bestSellingProduct)}>
                                        <FontAwesomeIcon  icon={faEye}   className="h-[24px] w-[24px] text-gray-400" />
                                    </button>
                                </div>

                                {bestSellingProduct.inventory >5?  <span className=" absolute top-0 mx-2 my-2 w-[55px] h-[26px] bg-red-500 rounded px-[10px] flex flex-row items-center justify-center ">
                                        <span className="text-white text-[12px]">-20%</span>
                                    </span>: ""}

                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-base text-black">{bestSellingProduct.name}</span>
                                <div className="flex flex-row gap-3" >
                                    <span className="text-base text-red-600"> ${bestSellingProduct.price}</span>
                                    <strike className="text-base text-gray-400"> $190</strike>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                                    ⭐ {bestSellingProduct.numOfReviews}
                                    <span className="text-gray-400">(4.5)</span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <Modal openModal={openModal} setOpenModal={setOpenModal}  modalImage={modalImage}/>

        </div>
    )
}

export default BestSellingProducts

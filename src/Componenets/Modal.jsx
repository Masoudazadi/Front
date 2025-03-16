import {useEffect} from "react";
import url from "./useRequests"

function Modal({openModal, setOpenModal,modalImage }) {

    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openModal]);
    return (
        <>
            <div
                 className={openModal? "fixed z-[10000] justify-center items-center w-full h-auto inset-0 bg-white/70 backdrop-blur-md ": "hidden"} >

                    <div className="w-full h-full">

                        <div className="h-full w-full ">

                            <div className="flex items-center justify-between p-4 md:p-5">

                                <button type="button"
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-hide="static-modal"
                                        onClick={() => setOpenModal((prev)=>!prev)}>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>


                            </div>

                            <div className="flex flex-col w-auto h-auto justify-center items-center">
                                <img src={`${url}${modalImage}`} className="w-[30%] h-[30%]"/>
                            </div>

                        </div>
                    </div>


            </div>

        </>
    )
}

export default Modal

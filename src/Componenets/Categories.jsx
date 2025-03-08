import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faKitchenSet, faBed } from '@fortawesome/free-solid-svg-icons'

function Categories() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const categories = [
        {name: "Office",
            icon: <FontAwesomeIcon icon={faBriefcase} className="w-[56px] h-[56px] text-gray-400"/>,
        },
        {name: "Kitchen",
            icon: <FontAwesomeIcon icon={faKitchenSet} className="w-[56px] h-[56px] text-gray-400"/>,
        },
        {name:  "Bedroom",
            icon: <FontAwesomeIcon icon={faBed} className="w-[56px] h-[56px] text-gray-400"/>,
        },
    ];

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < categories.length -7) {
            setCurrentIndex(currentIndex + 1);
        }
    };


    return (
        <div className="mx-5 lg:mr-[135px] xl:ml-40 mt-[142px] h-auto " >
            <div >
                <div className="w-auto flex flex-row gap-4 items-center">
                    <span className='inline-block w-5 h-10 bg-red-600 rounded'></span>
                    <span className='text-base text-red-600'>Categories</span>
                </div>
            </div>
            {categories.length >= 5 &&
            <div className="flex flex-col justify-center gap-20 lg:gap-0 items-start lg:flex-row lg:justify-between mt-6">
                <div className="flex flex-col justify-center items-center w-full gap-10  lg:flex-row  lg:justify-between ">
                    <div className="text-4xl">Browse By Category</div>
                    <div className=" hidden xl:flex xl:flex-row justify-between gap-2 w-full lg:w-auto items-end ">
                        <button
                            onClick={handlePrev}
                            className={`group !p-2 flex justify-center items-center border border-solid  w-[46px] h-[46px] transition-all duration-500 rounded-full  ${
                                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={currentIndex === 0}
                        >
                            <svg fill="#000000"
                                 height="16px" width="16px" version="1.1" id="Layer_1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                 viewBox="0 0 330 330" xmlSpace="preserve" transform="rotate(180)"><g id="SVGRepo_bgCarrier"
                                                                                                      strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                                <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g>
                            </svg>

                        </button>

                        <button
                            onClick={handleNext}
                            className={`group !p-2 flex justify-center items-center border border-solid w-[46px] h-[46px] transition-all duration-500 rounded-full  ${
                                categories.length -7 < 0 || currentIndex === categories.length-7? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={categories.length-7 <0 || currentIndex === categories.length-7}
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

            </div>}


            <div className=" w-full relative overflow-hidden mt-[40px]">
                <div
                    className="flex justify-center xl:justify-between flex-wrap gap-y-5 xl:gap-y-0 xl:flex-nowrap transition-transform duration-500"
                    style={{
                        transform: `translateX(-${currentIndex * (170+30)}px)`
                    }}
                >
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="md:flex-shrink-0 flex flex-col mr-[30px] xl:mr-[0]"
                        >
                            <div className=" w-[170px] h-[145px] border border-gray-400 rounded flex flex-col justify-around items-center xl:hover:bg-red-500 transition-bg duration-500 ease-in-out" >
                                {category.icon}
                                <span className="text-base">{category.name}</span>

                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full xl:mr-[120px]  my-[60px] ">
                <hr ></hr>
            </div>

        </div>
    )
}

export default Categories;





import  {useState} from 'react'
import Image from"../assets/img.png"
import pic from"../assets/20520246.jpg"
import mic from"../assets/retrato_fondo_negro.webp"
import mic2 from"../assets/titanedge_banner_desktop_1920x1080 (1).jpg"



function IndexPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [Image, pic, mic, mic2];


    function handleNext(){
        setCurrentSlide((currentSlide) => currentSlide + 1);

    }

    function handlePrev(){
            setCurrentSlide((currentSlide) => currentSlide - 1);
    }
    const[womenDropDown,setWomenDropDown]=useState(false)
    const[menDropDown,setMenDropDown]=useState(false)

    function handleMenDropDown(){
        setWomenDropDown(false)
        setMenDropDown(menDropDown => !menDropDown)
    }
    function handleWomenDropDown(){
        setMenDropDown(false)
        setWomenDropDown(womenDropDown => !womenDropDown)
    }
    return (
        <div  className="md:flex md:flex-col lg:flex-row md:items:center" >

            <aside id="sidebar-multi-level-sidebar "
                   aria-label="Sidebar">
                <div
                    className="flex w-full justify-center items-center flex-row  md:justify-end md:border-r md:border-r-gray-400 lg:w-[366px] pt-[39px] pr-[14px]">
                    <ul className=" flex flex-row scrollbar scrollbar-thumb-red-500 scrollbar-track-red-300  overflow-x-scroll  lg:overflow-hidden w-full lg:flex-col lg:gap-4 lg:w-[217px]">

                        <li>
                            <button type="button"
                                    className="flex items-center w-full p-2 text-base text-black"
                                    aria-controls="dropdown-example" data-collapse-toggle="dropdown-example"
                                    onClick={() => handleWomenDropDown()}>
                                <span
                                    className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Woman’s Fashion</span>
                                <svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 9 4-4-4-4"></path>
                                </svg>
                            </button>
                            <ul id="dropdown-example"
                                className={!womenDropDown ? "hidden py-2 space-y-2" : "py-2 space-y-2"}>
                                <li>
                                    <a href="#"
                                       className="flex items-center w-full px-[30%] text-black">Women 1</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="flex items-center w-full px-[30%] text-black">Women 2</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="flex items-center w-full px-[30%] text-black">Women 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button type="button"
                                    className="flex items-center w-full p-2 text-base text-black"
                                    aria-controls="dropdown-example" data-collapse-toggle="dropdown-example"
                                    onClick={() => handleMenDropDown()}>
                                <span
                                    className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Men’s Fashion</span>
                                <svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 9 4-4-4-4"></path>
                                </svg>
                            </button>
                            <ul id="dropdown-example"
                                className={!menDropDown ? "hidden py-2 space-y-2" : "py-2 space-y-2"}>
                                <li>
                                    <a href="#"
                                       className="flex items-center w-full px-[30%] text-black">Mens 1</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="flex items-center w-full px-[30%] text-black">Mens 2</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="flex items-center w-full px-[30%] text-black">Mens 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center p-2 text-black ">
                                <span className="flex-1 ms-3 whitespace-nowrap">Electronics</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center p-2 text-black">

                                <span className="flex-1 ms-3 whitespace-nowrap">Home & Lifestyle</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center p-2 text-black">
                                <span className="flex-1 ms-3 whitespace-nowrap">Medicine</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center p-2 text-black">
                                <span className="flex-1 ms-3 whitespace-nowrap">Sports & Outdoor</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center p-2 text-black">
                                <span className="flex-1 ms-3 whitespace-nowrap">Groceries & Pets</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center p-2 text-black">

                                <span className="flex-1 ms-3 whitespace-nowrap">Health & Beauty</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>




            <div className="hidden md:block h-full w-auto lg:w-full m-4 md:mt-[39px] lg:mr-[135px] ">

                <div id="default-carousel" className="relative md:w-full md:h-[400px]" data-carousel="slide">

                    <div className="relative h-56 overflow-hidden rounded-lg md:h-[400px]">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute w-full h-full transition-opacity duration-700 ${
                                    index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                <img
                                    src={slide}
                                    className="block w-full h-full object-cover"
                                    alt={`Slide ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>


                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">

                        <button className={`flex justify-center items-center border border-solid bg-white w-[46px] h-[46px] transition-all duration-500 rounded-full
                         ${currentSlide===0 ? "opacity-50 cursor-not-allowed":" "}`} disabled={currentSlide===0}  onClick={handlePrev}>
                            <svg fill="#000000"
                                 height="16px" width="16px" version="1.1" id="Layer_1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                 viewBox="0 0 330 330" xmlSpace="preserve" transform="rotate(180)"><g id="SVGRepo_bgCarrier"
                                                                                                      strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                                <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g>
                            </svg>
                        </button>


                        <button className={`flex justify-center items-center border border-solid bg-white w-[46px] h-[46px] transition-all duration-500 rounded-full
                         ${currentSlide===slides.length-1 ? "opacity-50 cursor-not-allowed":" "}`} disabled={currentSlide=== slides.length-1} onClick={handleNext}>
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
            </div>


        </div>
    )
}

export default IndexPage

import Women from "../assets/retrato_fondo_negro.webp";
import Ps5 from "../assets/20520246.jpg"

function NewArrival() {


    return (
        <div className="mx-5 lg:mr-[135px] xl:ml-40 mt-[142px] h-auto " >
            <div >
                <div className="w-auto flex flex-row gap-4 items-center">
                    <span className='inline-block w-5 h-10 bg-red-600 rounded '></span>
                    <span className='text-base text-red-600'>Featured</span>
                </div>
            </div>

            <div className="text-4xl mt-6">New Arrival</div>

            <div className="w-full h-full flex flex-col items-center xl:items-start gap-8 lg:flex-row lg:justify-between mt-[40px] mb-6">

                <div className="relative w-full lg:w-[570px] h-[600px]">
                    <img src={Ps5} alt="ps5" className="w-full h-full"/>
                    <div className="flex flex-col justify-end items-start gap-4 m-4 w-[50%] h-[568px] top-0 absolute">
                        <h1 className="text-2xl text-white ">PlayStation 5</h1>
                        <span className="text-[14px] text-white "> Black and White version of the PS5 coming out on sale.</span>
                        <a className="text-2xl text-white underline">Shop Now</a>

                    </div>
                </div>



                <div className="flex w-full flex-col gap-8">
                    <div className="relative w-full h-[284px]">
                    <img src={Women} alt="ps5" className="w-full h-full"/>
                    <div className="flex flex-col justify-end items-start gap-4 w-[50%] h-full p-4 top-0 absolute">
                        <h1 className="text-2xl text-white ">Women’s Collections</h1>
                        <span className="text-[14px] text-white ">Featured woman collections that give you another vibe.</span>
                        <a className="text-2xl text-white underline">Shop Now</a>
                    </div>
                </div>
                        <div  className="flex  flex-row gap-8">
                             <div className="relative w-full h-[284px]">
                    <img src={Women} alt="ps5" className="w-full h-full"/>
                    <div className="flex flex-col justify-end items-start gap-4 w-[50%] h-full p-4 top-0 absolute">
                        <h1 className="text-2xl text-white ">Speakers</h1>
                        <span className="text-[14px] text-white ">Amazon wireless speakers</span>
                        <a className="text-2xl text-white underline">Shop Now</a>

                    </div>
                </div>
                            <div className="relative w-full h-[284px]">
                                <img src={Women} alt="ps5" className="w-full h-full"/>
                                <div className="flex flex-col justify-end items-start gap-4 w-[50%] h-full p-4 top-0 absolute">
                                    <h1 className="text-2xl text-white ">Perfume</h1>
                                    <span className="text-[14px] text-white ">GUCCI INTENSE OUD EDP</span>
                                    <a className="text-2xl text-white underline">Shop Now</a>

                                </div>
                            </div>
                        </div>
                </div>

            </div>

        </div>
    )
}

export default NewArrival

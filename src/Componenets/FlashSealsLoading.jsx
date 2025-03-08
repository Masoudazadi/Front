import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



let counter=[]
for (let i = 0; i < 6; i++) {
    counter.push(i)
}

function FlashSealsLoading() {

    return (
        <div className="mx-5 lg:mr-0 xl:ml-40 mt-[142px] h-auto ">
            <div >
                <div className="w-auto flex flex-row gap-4 items-center">
                    <span className=' w-5 h-10  rounded'>
                        <Skeleton />
                    </span>
                    <span className='w-9 h-10'>
                        <Skeleton />
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-20 lg:gap-0 items-start lg:flex-row lg:justify-between mt-6">
                <div className="flex flex-col justify-center items-center w-full gap-10 lg:w-auto lg:flex-row lg:gap-[87px]">
                    <div className="w-20 h-2"> <Skeleton /> </div>
                </div>
                <div className="hidden xl:flex xl:flex-row justify-between gap-2 w-full lg:w-auto items-end  top-1/2  px-4 mr-[120px]">
                        <Skeleton circle width={40} height={40}/>
                        <Skeleton circle width={40} height={40}/>
                </div>
            </div>
            <div className="w-full relative overflow-hidden mt-[40px]">
                <div className="flex justify-center xl:justify-between flex-wrap gap-y-5 xl:gap-y-0 xl:flex-nowrap transition-transform duration-500">
                    {counter.map((items, index) =>
                        <div key={index} className="md:flex-shrink-0 flex flex-col justify-center items-start mr-[30px] gap-4">
                            <div className="relative group">
                                <Skeleton width={270} height={250} />
                            </div>
                            <div className="flex flex-col gap-2 w-[270px]">
                                <span>
                                        <Skeleton width={70} height={20} />
                                </span>
                                <div className="flex flex-row gap-3">
                                <span>
                                    <Skeleton width={60} height={20} />
                                 </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Skeleton width={40} height={20} />
                                </div>
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </div>

    )
}

export default FlashSealsLoading

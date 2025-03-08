import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


let counter=[]
for (let i = 0; i < 5; i++) {
    counter.push(i)
}
function BestSellingSkeleton() {
    return (
        <div className="mx-5 lg:mr-[135px] xl:ml-40 mt-[142px] h-auto " >
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
                <div className="flex flex-col justify-center items-center w-full gap-10  lg:flex-row lg:justify-between lg:items-center ">
                    <div className="w-20 h-2"> <Skeleton /> </div>
                    <div >
                        <Skeleton width={159} height={56}/>
                    </div>
                </div>
            </div>

            <div className="w-full relative overflow-hidden mt-[40px]">
                <div  className="flex flex-row justify-center xl:justify-between gap-[20px] flex-wrap"  >
                    {counter.map((bestSellingProduct, index) => (
                        <div key={index}
                            className="flex-shrink-0 flex flex-col w-[270px] h-[350px]  justify-center items-start  "
                        >
                            <div className="relative group" >
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
                        </div>
                    ))}
                </div>

            </div>


        </div>

    )
}

export default BestSellingSkeleton

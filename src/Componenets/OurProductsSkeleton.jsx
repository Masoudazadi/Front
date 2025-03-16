import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


let counter=[]
for (let i = 0; i < 5; i++) {
    counter.push(i)
}
function OurProductsSkeleton() {
    return (
        <div className="mx-5 lg:mr-[135px] xl:ml-40 mt-[142px] h-auto " >
            <div >
                <div className="w-auto flex flex-row gap-4 items-center">
                    <span className='inline-block w-5 h-10'>
                        <Skeleton />
                    </span>
                    <span className='text-base'>
                        <Skeleton/>
                        </span>
                </div>
            </div>

            <div className="flex flex-col justify-center gap-20 lg:gap-0 items-start lg:flex-row lg:justify-between mt-6">
                    <div className="w-20 h-2"> <Skeleton /> </div>
            </div>

            <div className="w-full relative overflow-hidden mt-[40px]">
                <div
                    className="flex flex-row justify-center xl:justify-between gap-[20px]  flex-wrap transition-transform duration-500"
                >
                    {counter.map((ourProduct, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex flex-col w-[270px] h-[350px]  justify-center items-start  "
                        >
                            <div className="relative group" >
                                 <Skeleton width={270} height={250} />
                

                              <span className=" absolute top-0 mx-2 my-2 w-[55px] h-[26px] rounded px-[10px] flex flex-row items-center justify-center ">
                                        <Skeleton width={70} height={20} />
                                    </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-base"><Skeleton width={70} height={20} /></span>
                                <div className="flex flex-row gap-3" >
                                    <span className="text-base"> <Skeleton width={70} height={20} /></span>
                                </div>
                                <div className="flex items-center gap-1  text-sm">
                                    <Skeleton width={70} height={20}/>
                                   <span className=" w-[20px] h-[20px] rounded-full "> <Skeleton width={20} height={20} borderRadius={25}/></span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <div className=" my-[60px] flex flex-row justify-center">
                    <Skeleton width={159} height={56}/> 
                </div>
               
            </div>

            </div>

    )
}

export default OurProductsSkeleton

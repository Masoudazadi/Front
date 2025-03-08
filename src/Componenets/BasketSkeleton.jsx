import Skeleton from "react-loading-skeleton";
let counter=[]
for (let i = 0; i < 5; i++) {
    counter.push(i)
}
function BasketSkeleton() {
    return (
        <div className="w-full my-[180px]  h-full ">
            <div className="h-full sm:mx-[135px] m-8 py-3 flex flex-col lg:flex-row lg:h-[72px] w-afull justify-between items-center lg:p-4 shadow-[1px_1px_9px_0px_#e2e8f0] ">
                <span className="text-base sm:w-[40%]"> Products</span>
                <span className="text-base sm:w-[10%]"> Price</span>
                <span className="text-base"> Quantity</span>
                <span className="text-base sm:w-[10%]"> Subtotal</span>
            </div>

            {counter.map((product,index) =>
            <div key={index} className="h-full sm:mx-[135px] m-8 py-3  lg:h-[72px] w-auto ">
                <div className="flex flex-col gap-2">
                    <Skeleton width="100%" height={72} />
                </div>
            </div>)}


            <div className="h-full sm:mx-[135px] flex flex-col gap-3 sm:flex-row sm:h-[72px] w-auto justify-between items-center p-8 sm:p-0">
                <button className="w-full sm:w-[218px] h-auto sm:h-[56px] border rounded border-black p-5  break-all " >Return To Shop</button>
                <button className="w-full sm:w-[218px] h-auto sm:h-[56px] border rounded border-black p-5 break-all" >Update Cart</button>
            </div>

            <div className="h-full sm:mx-[135px] m-8 md:py-3 flex flex-col lg:flex-row gap-3 justify-between items-center sm:items-baseline">
                <div className="w-full sm:w-auto sm:p-0 flex flex-col sm:flex-row gap-11">
                    <input placeholder="Coupon Code " className=" w-auto  h-[56px]  p-2 border border-black rounded break-all"/>
                    <button className="w-auto sm:w-[211px] h-[56px] border rounded text-white   bg-red-500 break-all" >Apply Coupon</button>
                </div>
                <div className="flex flex-col items-start border  mb-10 border-black rounded w-full sm:w-[470px] h-full sm:h-[324px] p-4 m-4 sm:m-0 gap-4 ">

                    <span className="text-[20px] break-all">Cart Total:</span>
                    <div className="w-full flex flex-row justify-between">
                        <span className="text-base break-all">Subtotal:</span>
                        <span className="text-base break-all"> <Skeleton width={35} height={15}/> </span>
                    </div>
                    <hr className="w-full"/>
                    <div className="w-full flex flex-row justify-between">
                        <span className="text-base break-all">Shipping:</span>
                        <span className="text-base break-all">0</span>
                    </div>
                    <hr className="w-full"/>
                    <div className="w-full flex flex-row justify-between">
                        <span className="text-base break-all">Total:</span>
                        <span className="text-base break-all "> <Skeleton width={35} height={15}/></span>
                    </div>
                    <div className="w-full flex flex-row justify-center">
                        <button className=" w-auto md:w-[260px] h-[56px] border rounded text-white bg-red-500 item break-all p-5" >Procees to checkout</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BasketSkeleton

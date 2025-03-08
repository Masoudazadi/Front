import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck,faHeadphones,faShield} from '@fortawesome/free-solid-svg-icons'
function Information() {
    return (

        <div  className="flex flex-row justify-between my-[140px] ">
            <div className="flex flex-col md:flex-row justify-center gap-20  w-full h-full">
                <div className="flex flex-col items-center gap-6">
                    <div className="w-20 h-20 border-2  border-gray-200 bg-gray-100 rounded-full   flex flex-row justify-center items-center">
                    <FontAwesomeIcon icon={faTruck}  className=" w-[50px] h-[50px] text-gray-700" />
                </div>
                    <div className="text-xl"> FREE AND FAST DELIVERY </div>
                    <div className="text-[14px]"> Free delivery for all orders over $140</div>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="w-20 h-20 border-2  border-gray-200 bg-gray-100 rounded-full   flex flex-row justify-center items-center">
                         <FontAwesomeIcon icon={faHeadphones} className=" w-[50px] h-[50px] text-gray-700" />
                    </div>
                    <div className="text-xl"> 24/7 CUSTOMER SERVICE</div>

                <div className="text-[14px]"> Friendly 24/7 customer support</div>
            </div>
                 <div className="flex flex-col items-center gap-6">
                    <div className="w-20 h-20 border-2  border-gray-200 bg-gray-100 rounded-full   flex flex-row justify-center items-center">
                        <FontAwesomeIcon icon={faShield} className=" w-[50px] h-[50px] text-gray-700" />
                    </div>
                    <div className="text-xl"> MONEY BACK GUARANTEE </div>
                    <div className="text-[14px]"> We reurn money within 30 days</div>
                </div>
            </div>
        </div>
    )
}

export default Information

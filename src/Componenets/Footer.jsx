import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane,faCopyright  } from '@fortawesome/free-solid-svg-icons';
import QRCode from 'react-qr-code';
import Google from "../assets/Google.png"
import Apple from "../assets/Apple.png"
import { faFacebookF,faTwitter,faInstagram,faLinkedinIn,  } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const qrValue = ""
    return (
        <div className="bg-black text-white pb-2">
            <div className=" bg-black text-white h-full xl:h-[440px] p-3.5  sm:flex sm:flex-row sm:justify-center sm:items-baseline gap-[87px] sm:flex-wrap lg:flex-nowrap ">
                <ul className='flex flex-col justify-center gap-[18px] sm:w-[40%] md:w-auto h-full py-8'>
                    <li className=" sm:text-2xl break-all">Exclusive</li>
                    <li className="sm:text-[20px] break-all">Subscribe</li>
                    <li className="sm:text-base break-all">Get 10% off your first order</li>
                    <li className="relative flex items-center w-auto max-w-xs ">
                        <input placeholder="Email" className="text-xs sm:text-base outline-none border rounded pl-2 sm:pl-4 py-1 sm:py-2 bg-black w-full" />
                        <button className="absolute right-2 sm:right-4">
                            <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4 sm:w-6 sm:h-6" />
                        </button>
                    </li>
                </ul>
                <ul className='flex flex-col justify-center gap-[18px] sm:w-[40%] md:w-auto py-8'>
                    <li className="text-sm sm:text-2xl break-all">Support</li>
                    <li className=" text-sm sm:text-base break-all">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                    <li className=" text-sm sm:text-base break-all ">exclusive@gmail.com</li>
                    <li className=" text-sm sm:text-base break-all">+88015-88888-9999</li>
                </ul>
                <ul className='flex flex-col justify-center gap-[18px] sm:w-[40%] md:w-auto py-8'>
                    <li className=" text-sm sm:text-2xl break-all">Account</li>
                    <li className="text-sm sm:text-base break-all">My Account</li>
                    <li className=" text-smsm:text-base break-all">Login / Register</li>
                    <li className=" text-sm sm:text-base break-all ">Cart</li>
                    <li className="text-sm sm:text-base break-all">Wishlist</li>
                    <li className="text-sm sm:text-base break-all">Shop</li>
                </ul>
                <ul className='flex flex-col justify-center  gap-[18px] sm:w-[40%] md:w-auto py-8'>
                    <li className="text-sm sm:text-2xl break-all">Quick Link</li>
                    <li className="text-sm sm:text-base break-all ">Privacy Policy</li>
                    <li className="text-sm sm:text-base break-all">Terms Of Use</li>
                    <li className="text-sm sm:text-base break-all">FAQ</li>
                    <li className="text-sm sm:text-base break-all">Contact</li>
                </ul>
                <ul className='flex flex-col justify-center gap-[24px] sm:w-[40%] md:w-auto py-8'>
                    <li className="text-sm sm:text-2xl break-all">Download App</li>
                    <li className="text-sm sm:text-base break-all">Save $3 with App New User Only</li>
                    <ul className="flex flex-col sm:flex-row gap-2">
                        <li className="text-sm sm:text-base">
                            <QRCode className="bg-white border border-white w-[20%]  h-[20%] sm:w-20 sm:h-20"
                                    value={qrValue}
                                    level="H"
                            />
                        </li>
                        <li className="h-[84px] flex flex-col gap-[4px]">
                            <img src={Google} className='w-[100px] xl:w-[110px] h-[40px]'/>
                            <img src={Apple} className='w-[100px] xl:w-[110px] h-[40px]'/>
                        </li>
                    </ul>
                    <ul className='flex  flex-col sm:flex-row gap-6 sm:my-[24px]'>
                        <li><FontAwesomeIcon icon={faFacebookF} className="w-[24px] h-[24px]"/></li>
                        <li><FontAwesomeIcon icon={faTwitter} className="w-[24px] h-[24px]"/></li>
                        <li><FontAwesomeIcon icon={faInstagram} className="w-[24px] h-[24px]"/></li>
                        <li><FontAwesomeIcon icon={faLinkedinIn} className="w-[24px] h-[24px]"/></li>
                    </ul>
                </ul>
            </div>
            <span className="flex flex-col sm:flex-row justify-center text-base gap-2 w-auto"> <FontAwesomeIcon icon={faCopyright} className="w-[20px] h-[20px]" />  Copyright Rimel 2022. All right reserved</span>

        </div>
    )
}

export default Footer


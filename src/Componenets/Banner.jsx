import BannerImage  from '../assets/titanedge_banner_desktop_1920x1080 (1).jpg';
import {useEffect, useState} from "react";



function Banner() {
    const [second, setSecond] = useState(56);
    const [minute, setMinute] = useState(19);
    const [hours, setHours] = useState(23);
    const [day, setDays] = useState(3);
    useEffect(() => {
        let intervalId = setInterval(() => {
            setSecond(prevTime => prevTime - 1);
            if (second===0){
                setSecond(59)
                setMinute((minute)=> minute-1)
            }else if(minute===0){
                setMinute(59)
                setHours((hours)=> hours-1)
            }else if(hours===0){
                setHours(24)
                setDays((days)=> days-1)
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [second,minute,hours,day]);


    return (
        <div className="hidden lg:flex relative w-auto mx-5 lg:mr-[135px] xl:ml-40 mt-[142px] h-full">
            <img className="banner-image w-auto" src={BannerImage} alt="Banner"/>
            <div className=" absolute top-0 h-full w-[50%] flex flex-col gap-10 justify-center items-center ">
                 <div className="text-white top-0 text-6xl w-[443px] text-center"> The Slimmest Watch In The Universe</div>

                <span className=" flex w-auto h-auto flex-row gap-4 items-center ">

                    <span className=" flex flex-col  justify-center items-center w-[100px] h-[100px] rounded-full bg-white">
                        <span className="text-[32px] text-black ">{day}</span>
                        <span className="text-[12px] text-black  ">  Day</span>
                    </span>

                    <span className=" flex flex-col justify-center items-center w-[90px] h-[90px] rounded-full bg-white">
                        <span className="text-[31px] text-black">{hours}</span>
                        <span className="text-[11px] text-black">  Hours</span>
                    </span>

                    <span className=" flex flex-col justify-center items-center w-[80px] h-[80px] rounded-full bg-white">
                        <span className="text-[30px] text-black">{minute}</span>
                        <span className="text-[10px] text-black">  Minute</span>
                    </span>

                    <span className=" flex flex-col justify-center items-center w-[75px] h-[75px] rounded-full bg-white">
                        <span className="text-[29px] text-black"> {second}</span>
                        <span className=" text-[9px] text-black ">  Seconds</span>
                    </span>

                </span>

                <button className=" text-white bg-[#00FF66] w-[171px] h-[56px] rounded">Buy Now</button>
            </div>
        </div>
    )
}

export default Banner

import {useEffect, useState} from "react";

function Timer() {
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
        <span className=" flex flex-col w-auto h-auto sm:flex-row gap-4 items-center sm:w-[302px] sm:h-[50px]">

    <span className=" flex flex-col ">
    <span className="text-black text-[12px]">  Day</span>
<span className="text-[32px]">{day}</span>
</span>

<span className="text-red-500 text-4xl"> : </span>

<span className=" flex flex-col items-center">
            <span className="text-black text-[12px]">  Hours</span>
             <span className="text-[32px]">{hours}</span>
        </span>

<span className="text-red-500 text-4xl"> : </span>

<span className=" flex flex-col items-center">
            <span className="text-black text-[12px]">  Minute</span>
            <span className="text-[32px]">{minute}</span>
        </span>

<span className="text-red-500 text-4xl"> : </span>

<span className=" flex flex-col items-center">
            <span className="text-black text-[12px]"> Seconds</span>
            <span className="text-[32px]">{second}</span>

        </span>
</span>
    )
}

export default Timer


import Phone from "../assets/phone.png";
import {useForm} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState} from "react";
import axios from "axios";
import Offer from "./Offer.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {useNavigate} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import {url} from "./useRequests.js"



const userSchema = z.object({
    email: z.string().email({message:"Email is invalid"}),
    password: z.string().min(6, {message:"Password should be at least 6 characters long"}),
});

const BASE_URL = `${url}/api/v1/auth/login`;
function Login() {
    const [success, setSuccess] = useState(false);
    const {register, handleSubmit, formState: {errors}, setError, clearErrors} = useForm({
        resolver: zodResolver(userSchema),
        shouldFocusError: false
    });
    const navigate = useNavigate();


    const onSubmit = async (formdata)=> {
        try{
            const resp= await axios.post(BASE_URL,formdata,{
                headers: {
                    "Content-Type": "application/json",
                },
            })
            setSuccess(true)
            toast.success("Successfully logged in 😉",{ position:"bottom-right", autoClose: 1500, onClose: () => navigate("/")  });
            localStorage.setItem("authToken", resp.data.token);
            } catch (error) {
            if (error.response?.data?.msg.includes("password")) {
                setError("password", { type: "server", message: error.response.data.msg});
            } else {
                setError("email", { type: "server", message: error.response.data.msg });
            }

        }
      }

    const handleInputChange = (field) => {
        clearErrors(field);
    };


    return (
        <>
            <Offer/>
            <Navbar/>
            <div className="py-[68px] flex flex-row justify-center xl:justify-start items-center 2xl:gap-56 ">
            <img src={Phone} className="w-[805px] h-[781px] hidden xl:block "/>

            <div className="w-full px-8 sm:w-[371px] h-full sm:h-[326px] flex flex-col items-center sm:items-start ">
                <h1 className="text-3xl w-auto mb-6 break-all"> Log in to Exclusive</h1>
                <h5 className="break-all">Enter Your Details Below</h5>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start pt-12 ">

                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    <input  onChange={() => handleInputChange("email")}  autoComplete="email" type="email" {...register("email")} placeholder="Email or Phone Number" className="border-b w-full sm:w-[370px] h-[32px] outline-none mb-10"/>
                    {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    <input onChange={() => handleInputChange("password")}  autoComplete="current-password" type="password" name="password"  {...register("password")} placeholder="password" className="border-b w-full sm:w-[370px] h-[32px] outline-none mb-10"/>
                         <div className="flex justify-between md:flex-row flex-col items-center w-full">
                             <button type="submit" className={success?"w-full sm:w-[124px] h-14 bg-gray-400 rounded text-white break-all":"w-full sm:w-[124px] h-14 bg-[#DB4444] rounded text-white break-all"}  disabled={success}>
                            Login
                            </button>
                    <a href="#" className="mt-4 text-[#DB4444] break-all">Forget Password? </a>
                    </div>
                </form>
            </div>
        </div>
            <Footer/>
            <ToastContainer />
        </>
    )
}

export default Login

import Phone from "../assets/phone.png";
import {useForm} from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState} from "react";
import axios from "axios";
import Offer from "./Offer.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {url} from "./useRequests.js"


const userSchema = z.object({
    name:z.string().min(5, {message:"Name must be at least 5 character"}),
    email: z.string().email({message:"Email is invalid"}),
    password: z.string().min(6, {message:"Password should be at least 6 characters long"}),
});

    const BASE_URL = `${url}/api/v1/auth/register`;

function Register() {
    const [created,setCreated] = useState(false)
    const { register, handleSubmit, formState: {errors},setError, clearErrors} = useForm({
                resolver: zodResolver(userSchema),
                shouldFocusError: false
                });
    const navigate = useNavigate();

    const onSubmit = async (formdata)=> {
        try{
             await axios.post(BASE_URL,formdata,{
                headers: {
                    "Content-Type": "application/json",
                },
            })
            toast.success("Successfully Registered",{ position:"bottom-right", autoClose: 2000 });
            setCreated(true)
            navigate ("/login")

        }
        catch(error){
            setError("email", { type: "server", message: error.response.data.msg});
        }
    }

    function handleInputs(value){
          clearErrors(value)
    }

    return (
        <>
            <Offer/>
            <Navbar/>
        <div className="py-[68px] flex flex-col xl:flex-row justify-center xl:justify-start items-center 2xl:gap-56 ">
            <img src={Phone} className="w-[805px] h-[781px] hidden xl:block "/>
            <div className="w-full px-8 sm:w-[371px] h-full flex flex-col items-center sm:items-start ">
                <h1 className="text-3xl w-auto mb-6 break-all"> Create an account</h1>
                <h5 className=" break-all">Enter Your Details Below</h5>

             <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-start pt-12 ">

                    {errors.name ? <span className="text-red-500 text-sm"> {errors.name.message}</span> : null}
                    <input onChange={() => handleInputs("name")} autoComplete="name" {...register("name")} placeholder="Name" className="p-2 border-b w-full sm:w-[370px] h-[32px] outline-none mb-10"/>

                    {errors.email ? <span className="text-red-500 text-sm"> {errors.email.message}</span> : null}
                    <input onChange={() => handleInputs("email")} autoComplete="email" type="email" name="email" {...register("email")} placeholder="Email " className="p-2 border-b w-full sm:w-[370px] h-[32px] outline-none mb-10"/>

                    {errors.password ? <span className="text-red-500 text-sm"> {errors.password.message}</span> : null}
                    <input onChange={() => handleInputs("password")}  autoComplete="current-password" type="password" name="password"  {...register("password")} placeholder="password" className="p-2 border-b w-full sm:w-[370px] h-[32px] outline-none mb-10"/>


                    <button type="submit" className=" w-full sm:w-[371px] h-14 bg-[#DB4444] rounded text-white break-all" disabled={created} >
                            {!created?  "Create an account": "Your Account has been registered"}
                    </button>
                </form>
                <button className="w-full sm:w-[371px] h-14 rounded border mt-4 flex items-center justify-center gap-3">
                    <FontAwesomeIcon icon={faGoogle}/>
                    sign up with Google
                </button>
                <span className="w-full sm:w-[371px] mt-4">Already have account? <a href="#">Log in</a> </span>
            </div>
        </div>
            <Footer/>
            <ToastContainer />
        </>
    )
}

export default Register
